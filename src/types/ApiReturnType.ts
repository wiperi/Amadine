import { QuizSessionState } from "./Enums";

export type EmptyObject = Record<never, never>;

export type ReturnedQuizView = {
  quizId: number;
  name: string;
};

export type ParamQuestionBody = {
  question: string;
  duration: number;
  points: number;
  answers: Array<{ answer: string; correct: boolean }>;
};

export type ParamQuestionBodyV2 = ParamQuestionBody & { thumbnailUrl: string };

export type RemoveFunctions<T> = Omit<
  T,
  keyof { [K in keyof T as T[K] extends (...args: any[]) => unknown ? K : never]: never }
>;

export type AnswerReturned = {
  answerId: number;
  answer: string;
  colour: string;
  correct: boolean;
};

export type QuestionReturned = {
  questionId: number;
  question: string;
  duration: number;
  points: number;
  answers: AnswerReturned[];
};

export type QuizReturned = {
  quizId: number;
  name: string;
  timeCreated: number;
  timeLastEdited: number;
  description: string;
  numQuestions: number;
  questions: QuestionReturned[];
  duration: number;
};

export type QuestionReturnedV2 = QuestionReturned & { thumbnailUrl: string };

export type QuizReturnedV2 = QuizReturned & {
  questions: QuestionReturnedV2[];
  thumbnailUrl: string;
};

export type MessagesReturned = {
  messageBody: string;
  playerId: number;
  playerName: string;
  timeSent: number;
};

export type QuestionResultReturned = {
  questionId: number;
  playersCorrectList: string[];
  averageAnswerTime: number;
  percentCorrect: number;
};

export type PlayerReturned = {
  name: string;
  score: number;
};

export type QuizSessionResultReturned = {
  usersRankedByScore: PlayerReturned[];
  questionResults: QuestionResultReturned[];
};

export type MessageParam = {
  messageBody: string;
};


export type QuizSessionStatusAdminReturned = {
  state: QuizSessionState;
  players: string[];
  atQuestion: number;
  metadata: QuizReturnedV2
};

export type QuizSessionStatusPlayerReturned = {
  state: QuizSessionState;
  numQuestions: number;
  atQuestion: number;
};

export type PlayerGetQuestionInfoReturned = {
  questionId: number;
  question: string;
  duration: number;
  thumbnailUrl: string;
  points: number;
  answers: {
    answerId: number;
    answer: string;
    colour: string;
  }[];
}

export type PlayerGetQuestionResultReturned = {
  questionId: number;
  averageAnswerTime: number;
  percentCorrect: number;
  playersCorrectList: string[];
};

export type PlayerGetSessionResultReturned = {
  usersRankedByScore: PlayerReturned[];
  questionResults: {
    questionId: number;
    playersCorrectList: string[];
    averageAnswerTime: number;
    percentCorrect: number;
  }[];
};
