import React, { useState } from 'react';
import {
  Button,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  message,
  Typography,
} from 'antd';
import {
  DragSortTable,
  ProColumns,
  EditableProTable,
} from '@ant-design/pro-components';
import { PlusOutlined, MenuOutlined } from '@ant-design/icons';
import AnswersEditTable from './AnswersEditTable';

interface TableItem {
  id: string;
  name: string;
  numAnswers: number;
  Duration: string;
  description: string;
}

const QuestionEditTable: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<TableItem[]>([
    {
      id: '1',
      name: 'What is the capital of the moon?',
      numAnswers: 32,
      Duration: '44 seconds',
      description: 'This is a quiz about the moon',
    },
    {
      id: '2',
      name: 'What is the capital of the moon?',
      numAnswers: 42,
      Duration: '44 seconds',
      description: 'This is a quiz about the moon',
    },
  ]);

  // define shape of columns
  const columns: ProColumns<TableItem>[] = [
    {
      title: 'Sort',
      dataIndex: 'sort',
      width: 60,
      className: 'drag-visible',
      editable: false,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
      formItemProps: {
        rules: [{ required: true, message: 'Name is required' }],
      },
    },
    {
      title: '# Answers',
      dataIndex: 'numAnswers',
      width: 100,
      formItemProps: {
        rules: [{ required: true, message: 'Number of Answers is required' }],
      },
      renderFormItem: () => <InputNumber min={1} max={120} />,
    },
    {
      title: 'Duration',
      dataIndex: 'Duration',
      formItemProps: {
        rules: [{ required: true, message: 'Duration is required' }],
      },
    },
    {
      title: 'Action',
      valueType: 'option',
      width: 200,
      render: (_, record, __, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          Edit
        </a>,
        <Popconfirm
          key="delete"
          title="Are you sure to delete this record?"
          onConfirm={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
            message.success('Deleted successfully');
          }}
        >
          <a>Delete</a>
        </Popconfirm>,
      ],
    },
  ];

  const handleDragSortEnd = (beforeIndex: number, afterIndex: number, newDataSource: any) => {
    console.log('排序后的数据', newDataSource);
    setDataSource(newDataSource);
    message.success('修改列表排序成功');
  };

  return (
    <DragSortTable<TableItem>
      headerTitle="Questions"
      // 关闭分页器
      pagination={false}
      columns={columns}
      rowKey="id"
      dataSource={dataSource}
      onChange={(value) => setDataSource(value as TableItem[])}
      dragSortKey="sort"
      onDragSortEnd={handleDragSortEnd}
      expandable={{
        // Render the expanded row with the AnswersEditTable component
        expandedRowRender: (record) => (
          // <Typography.Paragraph>{record.description}</Typography.Paragraph>
          <AnswersEditTable />
        ),
      }}
      editable={{
        type: 'multiple',
        editableKeys,
        onSave: async (rowKey, data, row) => {
          console.log(rowKey, data, row);
          // Here you would typically make an API call to save the data
          message.success('Saved successfully');
        },
        onChange: setEditableRowKeys,
      }}
      search={false}
      options={{
        search: false,
        fullScreen: false,
        reload: false,
        setting: false,
        density: false,
      }}
      toolBarRender={() => [
        <Button
          type="primary"
          key="add"
          onClick={() => {
            const newId = (parseInt(dataSource[dataSource.length - 1]?.id || '0') + 1).toString();
            const newRow: TableItem = {
              id: newId,
              name: `New Person ${newId}`,
              numAnswers: 25,
              Duration: 'Click to edit',
              description: 'New person description',
            };
            setDataSource([...dataSource, newRow]);
            setEditableRowKeys([...editableKeys, newId]);
          }}
          icon={<PlusOutlined />}
        >
          Add New Row
        </Button>,
      ]}
    />
  );
};

export default QuestionEditTable;