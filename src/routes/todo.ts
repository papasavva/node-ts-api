import {Router} from "express"

import {create, read} from '../controllers/todos'

const router = Router()

router.post('/', create)
router.get('/', read)
router.patch('/:id')
router.delete('/:id')

export default router