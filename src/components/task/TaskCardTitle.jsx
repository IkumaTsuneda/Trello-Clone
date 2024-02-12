import React, { useState } from 'react'

export const TaskCardTitle = () => {

  // タイトルクリック状態
  const [isClick, setIsClick] = useState(false)
  // タイトル
  const [inputCardTitle, setInputCardTitle] = useState("Title")

  /**
   * タイトルクリック判定
   */
  const handleClick = () => { 
    setIsClick(true) 
  }

  /**
   * タイトルの入力値を設定する関数
   * @param {*} e イベンハンドラ
   */
  const handleChange = (e) => { 
    setInputCardTitle(e.target.value) 
  }

  /**
   * サブミット処理
   * @param {*} e イベンハンドラ
   */
  const handleSubmit = (e) => { 
    e.preventDefault() 
    setIsClick(false)
  }

  const handleBlur = () => { 
    setIsClick(false)
   }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input 
            autoFocus
            className="taskCardTitleInput"
            type="text"
            maxLength="18" 
            value={inputCardTitle}
            onChange={handleChange} 
            onBlur={handleBlur} 
            
          />
        </form>
      ):(
        <form>
          <h3>{inputCardTitle}</h3>
        </form>
      )}
    </div>
  )
}
