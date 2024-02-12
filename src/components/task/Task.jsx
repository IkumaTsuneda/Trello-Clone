import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export const Task = ({ task, index, taskList, setTaskList }) => {

  /**
   * 削除処理
   * @param {*} id 削除処対象のタスクID
   */
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div 
          className="taskBox" 
          key={task.id}  
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
        >
            <p className="taskText">{ task.text }</p>
            <button 
              className="taskTrashButton" 
              onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
      )}
    </Draggable>
  )
}
