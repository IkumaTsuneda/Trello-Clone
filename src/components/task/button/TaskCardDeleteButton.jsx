import React from 'react'

export const TaskCardDeleteButton = ({ taskCard, taskCardsList, setTaskCardsList }) => {

  /**
   * 削除処理
   * @param {*} id 削除処対象のタスクカードID
   */
  const taskCardDeleteButton = (id) => { 
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
   }

  return (
    <div>
      <button 
        className="taskCardDeleteButton" 
        onClick={() => { taskCardDeleteButton(taskCard.id) }}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}
