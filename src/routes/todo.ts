import {Router} from "express"

import {create} from '../controllers/todos'

const router = Router()

router.post('/', create)
router.get('/')
router.patch('/:id')
router.delete('/:id')

export default router