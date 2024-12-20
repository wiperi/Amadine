import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-form';
import QuestionEditTable from './QuestionEditTable';
import { Button, Form, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateQuiz, fetchDeleteQuiz, fetchEditQuiz } from '@/store/modules/userStore';
import { AxiosError } from 'axios';
import React from 'react';

const QuizEditModal: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  const [form] = Form.useForm<{ name: string; description: string }>();
  const dispatch = useDispatch();

  const quiz = useSelector((state: any) => state.user.editingQuiz);

  const isCreatingQuiz = quiz.name === undefined;

  return (
    <ModalForm<{
      name: string;
      description: string;
    }>
      title={<h1 className="mb-6 text-2xl font-bold">{isCreatingQuiz ? 'Create Quiz' : 'Edit Quiz'}</h1>}
      open={open}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => setOpen(false),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        try {
          console.log(values);
          if (isCreatingQuiz) {
            await dispatch(fetchCreateQuiz(values.name, values.description));
          } else {
            await dispatch(fetchEditQuiz(quiz.quizId, values.name, values.description));
          }
          message.success('Submitted successfully');
          setOpen(false);
          return true;
        } catch (error) {
          console.log(error);
          if (error instanceof AxiosError) {
            message.error(error.response?.data?.error);
          } else {
            message.error('Failed to submit');
          }
        }
      }}
      onFinishFailed={() => {
        message.error('Failed to submit');
      }}
      // modify submitter to add delete button
      submitter={{
        render: (props, defaultDoms) => {
          return [
            !isCreatingQuiz && (
              <Popconfirm
                title="Are you sure you want to delete this quiz?"
                onConfirm={async () => {
                  try {
                    await dispatch(fetchDeleteQuiz(quiz.quizId));
                    setOpen(false);
                    message.success('Deleted successfully');
                  } catch (error) {
                    message.error('Failed to delete');
                  }
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  key="delete"
                  danger
                >
                  Delete
                </Button>
              </Popconfirm>
            ),
            // change submit button text
            ...defaultDoms.map(dom => 
              dom.key === 'submit' 
                ? React.cloneElement(dom, { children: isCreatingQuiz ? 'Create' : 'Save' })
                : dom
            ),
          ];
        },
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="Quiz Name"
          placeholder="Quiz Name"
          initialValue={quiz?.name}
          rules={[
            { required: true, message: 'Quiz name is required' },
            {
              pattern: /^[a-z0-9\s]+$/i,
              message: 'Quiz name can only contain letters, numbers, and spaces',
            },
          ]}
        />

        <ProFormText
          width="md"
          name="description"
          label="Quiz Description"
          placeholder="Quiz Description"
          initialValue={quiz?.description}
          rules={[
            { required: true, message: 'Quiz description is required' },
            {
              max: 100,
              message: 'Description must be less than 100 characters',
            },
          ]}
        />
      </ProForm.Group>

      <QuestionEditTable />
    </ModalForm>
  );
};

export default QuizEditModal;
