import React from 'react'
import { v4 as uuid } from 'uuid'

export const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
  
  /**
   * タスク追加処理
   * @param {*} e イベンハンドラ
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.length === "") {
      return
    }
    
    // タスクカード追加
    const taskId = uuid()
    setTaskList([
      ...taskList, 
      {
        id: taskId,
        draggableId: `task-${taskList.length}`,
        text: inputText,
      },
    ])
    setInputText("")
  }
  
  /**
   * タスク内容の入力値を設定する関数
   * @param {*} e イベンハンドラ
   */
  const hadleChange = (e) => { 
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="add a task" 
          className="taskAddInput" 
          onChange={hadleChange} 
          value={inputText}
        />
      </form>
    </div>
  )
}