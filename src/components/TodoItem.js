import React from 'react'
import Card from '../share/Card'
import Button from '../share/Button'

import { useTodos } from '../store/todosContext'

import './TodoItem.css'

const TodoItem = ({ todo }) => {

    const { updateTodo, deleteTodo } = useTodos()

    const updateTodoHandler = () => {
        updateTodo(todo._id, {
            ...todo,
            isDone: !todo.isDone
        })
    }

    const deleteTodoHandler = () => {
        deleteTodo(todo._id)
    }

    return (
        <Card>            
            <p>{todo.description}</p>
            <div className='btn-container'><Button clickHandler={updateTodoHandler} title={todo.isDone ? 'Closed' : 'Open'}/>
                <Button clickHandler={deleteTodoHandler} title='Delete' /></div>
        </Card>
    )
}

export default TodoItem