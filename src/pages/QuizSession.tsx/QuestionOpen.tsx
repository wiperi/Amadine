import { useContext, useEffect, useReducer } from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import { StateContext } from './QuizSession';
import ControlBar from './ControlBar';
import { playerGetQuestionInfo } from '@/apis/quiz';
import { QuizSessionState as S } from '@/types/Enums';
import { catchAxiosError } from '@/utils/helpers';
import { Question } from '@/types/UserStore';

const QuestionOpen: React.FC = () => {
  const { state, atQuestion, playerId, quizId } = useContext(StateContext);

  // Get question
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  useEffect(() => {
    if (state === S.QUESTION_OPEN) {
      catchAxiosError(async () => {
        const { data: question } = await playerGetQuestionInfo(playerId, atQuestion);
        setQuestion(question as any);
      });
    }
  }, [state]);

  // Progress bar
  const growDuration = 3; // Duration to grow from 0 to 100
  const shrinkDuration = question?.duration || 10; // Duration to shrink from 100 to 0
  const [progress, setProgress] = useState<number>(0);
  const [answerDisplay, setAnswerDisplay] = useState(false);
  const [barColor, setBarColor] = useState<'blue' | 'green'>('blue');

  useEffect(() => {
    let startTime = Date.now();
    let isGrowing = true;

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;

      if (isGrowing) {
        // Growing phase
        const newProgress = Math.min(100, (elapsedTime / (growDuration * 1000)) * 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          isGrowing = false;
          startTime = Date.now();
          setAnswerDisplay(true);
        }
      } else {
        // Shrinking phase
        const newProgress = Math.max(0, 100 * (1 - elapsedTime / (shrinkDuration * 1000)));
        setProgress(newProgress);
        setBarColor('green');

        if (newProgress <= 0) {
          clearInterval(interval);
          setProgress(0);
        }
      }
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-800 text-white">
      <div className="flex min-h-screen flex-col justify-center gap-8 p-8">
        {quizId !== -1 && <ControlBar />}

        <h1 className="text-center text-5xl font-bold">{question?.question}</h1>

        <div className="flex justify-center">
          <ProgressBar progress={progress} barColor={barColor} />
        </div>

        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${answerDisplay ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
        >
          {question?.answers.map((a) => (
            <button
              key={a.answerId}
              className="rounded-lg bg-slate-700 p-6 text-xl font-semibold text-white hover:bg-slate-600"
            >
              {a.answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionOpen;
