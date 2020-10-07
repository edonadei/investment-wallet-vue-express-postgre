import { Stock } from '../models/stock.model'

export default function getStocks(req, res) {
  try {
    Stock.getAll().then((values) => res.status(200).json(values))
  } catch (err) {
    res.status(400).send({ message: 'error: ' + err })
  }
}

export function getStock(req, res) {
  try {
    if (!req.params.id) throw Error('You need to precise an ID')
    Stock.get(req.params.id).then((value) => res.status(200).json(value))
  } catch (err) {
    res.status(400).send({ message: 'error: ' + err })
  }
}
