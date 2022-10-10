import React from 'react'
import TodoList from '../components/TodosList'
import TodoForm from '../components/TodosForm'
import './TodosScreen.css'

const TodosScreen = () => {
    return (
        <div className='todos-screen'>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default TodosScreen
