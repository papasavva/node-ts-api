import {RequestHandler} from 'express'

import {Todo} from '../models/todos'
const TODOS : Todo[]= []

export const create : RequestHandler = (req, res, next) => {
    const id = Math.random().toString()
    const text = (req.body as {text : string}).text

    const newTodo = new Todo(id, text)
    console.log(newTodo)
    TODOS.push(newTodo)

    res.json({message : 'Created the todo', data : newTodo})
}