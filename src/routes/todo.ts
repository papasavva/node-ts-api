import {Router} from "express"

import {createTodo, readTodo, updateTodo, deleteTodo} from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', readTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router