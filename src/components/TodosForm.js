import React, { useState } from 'react'
import Card from '../share/Card'

import { v4 as uid } from 'uuid';

import { useTodos } from '../store/todosContext'

import './TodosForm.css'

const TodosForm = () => {

  const { createTodo } = useTodos()

  const [todo, setTodo] = useState({
    description: ''
  })

  const onChangeHandler = (e) => {
    // console.log(e.target.value)
    setTodo({ ...todo, [e.target.name]: e.target.value })
    // console.log(todo)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    todo.description.trim().length !== 0 && createTodo({
      id: uid(),
      description: todo.description,
      isDone: false
    })
  }

  return (
    <Card>
      <form className='form' onSubmit={onSubmitHandler}>
        <div className='label-button-container'>
        <label className='label' htmlFor='description'>New Todo</label>
        <button type='submit'>Create</button>
        </div>
        <textarea type='textarea' id='description' name='description' rows='5' onChange={onChangeHandler}></textarea>
      </form>
    </Card>
  )
}

export default TodosForm