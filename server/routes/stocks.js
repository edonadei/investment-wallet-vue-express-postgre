import { Router } from 'express'
import getStocks from '../controllers/get.stocks.js'
import { getStock } from '../controllers/get.stocks.js'
// import posStocks from '../controllers/post.stock.js'
// import puStocks from '../controllers/put.stock.js'
// import deletStocks from '../controllers/delete.stock.js'
const router = Router()
router.get('/stocks', getStocks)
router.get('/stocks/:id', getStock)
// router.post('/todo', postTodo)
// router.put('/todo/:todoId', putTodo)
// router.delete('/todo/:todoId', deleteTodo)

export default router
