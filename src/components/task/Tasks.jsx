import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const Tasks = ({ taskList, setTaskList }) => {

  /**
   * ドラッグ&ドロップ処理
   * @param {*} result 並び替え後のタスクリスト
   */
  const handleDragEnd = (result) => { 
    reorder(taskList, result.source.index, result.destination.index)
    setTaskList(taskList)
   }

  /**
  * タスクの並び替え処理
  * @param {*} taskList   タスクリスト
  * @param {*} startIndex ドラッグしたタスクのインデックス
  * @param {*} endIndex   ロップ先のインデックス
  */
  const reorder = (taskList, startIndex, endIndex) => { 
    const remove = taskList.splice(startIndex, 1)
    taskList.splice(endIndex, 0, remove[0])
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task 
                    task={task} 
                    index={index}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
