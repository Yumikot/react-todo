import React from 'react'
import './App.css'
import { useState } from 'react'
import { InputTodo } from './components/InputTodo'
import { IncompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  /* 日付の取得*/

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const onChangeTodoText = (event) => setTodoText(event.target.value)
  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }
  return (
    <>
      <div className="wrapper">
        <div className="title">
          <h1>My To Do List</h1>
        </div>

        {/* 日付の取得*/}
        <div className="date">
          {year}年{month}月{date}日
        </div>
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
          disabled={incompleteTodos.length >= 5}
        />
        {incompleteTodos.length >= 5 && (
          <p className="caution">登録できるTodoは5コまでです！</p>
        )}

        <IncompleteTodos
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        <TwitterShareButton
          url={['https://react-todo2021.herokuapp.com/']}
          title={['React-todoapp']}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </>
  )
}
