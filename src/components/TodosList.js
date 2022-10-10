import React, { useEffect } from 'react'

import TodoItem from './TodoItem'

import { useTodos } from '../store/todosContext'


const TodosList = () => {

    const { todos, fetchAllTodos } = useTodos()

    useEffect(() => {
        fetchAllTodos()
    }, [fetchAllTodos])

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodosList