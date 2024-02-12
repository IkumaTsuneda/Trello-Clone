import React, { useState } from 'react'
import { TaskCardTitle } from './TaskCardTitle'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { Tasks } from './Tasks'
import { Draggable } from 'react-beautiful-dnd'

export const TaskCard = ({ index, taskCard, taskCardsList, setTaskCardsList }) => {

  // タスク
  const [inputText, setInputText] = useState("")

  // タスクリスト
  const [taskList, setTaskList] = useState([])

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => ( 
        <div 
          className="taskCard" 
          ref={provided.innerRef} 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="taskCardTitleAndTaskCardDeleteButtonArea">
            <TaskCardTitle />
            <TaskCardDeleteButton 
              taskCard={taskCard}
              taskCardsList={taskCardsList} 
              setTaskCardsList={setTaskCardsList} 
            />
          </div>
          <TaskAddInput 
            inputText={inputText} 
            setInputText={setInputText} 
            taskList={taskList} 
            setTaskList={setTaskList}
          />
          <Tasks 
            inputText={inputText} 
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  )
}
