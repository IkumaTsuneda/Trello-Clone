import React, { useState } from 'react'
import { TaskCard } from './TaskCard'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'


export const TaskCards = () => {

  // タスクカードリスト
  const [taskCardsList, setTaskCardsList] = useState([{
    id: "0", 
    draggableId: "item:0",
  }])

  /**
   * ドラッグ&ドロップ処理
   * @param {*} result 並び替え後のタスクカード
   */
  const handleDragEnd = (result) => { 
    reorder(taskCardsList, result.source.index, result.destination.index)
    setTaskCardsList(taskCardsList)
  }

  /**
  * タスクの並び替え処理
  * @param {*} taskCardsList   タスクリスト
  * @param {*} startIndex ドラッグしたタスクのインデックス
  * @param {*} endIndex   ロップ先のインデックス
  */
  const reorder = (taskCardsList, startIndex, endIndex) => { 
    const remove = taskCardsList.splice(startIndex, 1)
    taskCardsList.splice(endIndex, 0, remove[0])
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div 
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard 
                key={taskCard.id} 
                index={index}
                taskCard={taskCard}
                taskCardsList={taskCardsList} 
                setTaskCardsList={setTaskCardsList} 
              />
            ))}  
            {provided.placeholder}
            <AddTaskCardButton 
              taskCardsList={taskCardsList} 
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
   
  )
}