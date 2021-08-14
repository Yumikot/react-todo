import React from 'react'

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props
  return (
    <div className="comp__area">
      <h2>完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="contents">
              <li className="list-item">{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
