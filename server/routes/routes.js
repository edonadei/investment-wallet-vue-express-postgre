import { Router } from 'express'
import stockRouter from './stocks'

const router = Router()
router.use('/', stockRouter)

export default router
