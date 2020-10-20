import {RequestHandler} from 'express'

import {Todo} from '../models/todos'
const TODOS : Todo[]= []

export const create : RequestHandler = (req, res, next) => {
    const id = Math.random().toString()
    const text = (req.body as {text : string}).text

    const newTodo = new Todo(id, text)

    TODOS.push(newTodo)

    res.json({message : 'Created the todo', data : newTodo})
}

export const read : RequestHandler = (req, res, next) => {
    res.json({message : 'List of todos', data : TODOS})
}

export const update : RequestHandler<{id:string}> = (req, res, next) => {
    const id = req.params.id
    const updatedText = (req.body as {text : string}).text
    const todoIndex = TODOS.findIndex(todo => todo.id === id)

    if (todoIndex < 0)  {
        throw new Error('No such todo with this id.')
    }

    TODOS[todoIndex] = new Todo(id, updatedText)


    res.json({message : 'Todo is updated', data : TODOS[todoIndex]})
}