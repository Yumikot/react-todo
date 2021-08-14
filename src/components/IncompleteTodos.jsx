import React from 'react'

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props
  return (
    <div className="yet__area">
      <h2>未完了のTODO</h2>
      <ol>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="contents">
              <li className="list-item">{todo}</li>
              <button
                onClick={() => onClickComplete(index)}
                className="done__btn"
              >
                完了
              </button>
              <button
                onClick={() => onClickDelete(index)}
                className="delete__btn"
              >
                削除
              </button>
            </div>
          )
        })}
      </ol>
    </div>
  )
}
