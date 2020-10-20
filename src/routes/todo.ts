import {Router} from "express"

import {create, read, update} from '../controllers/todos'

const router = Router()

router.post('/', create)
router.get('/', read)
router.patch('/:id', update)
router.delete('/:id')

export default router