import { Stock } from '../models/stock.model'

export default function getStocks(req, res) {
  try {
    Stock.getAll().then((values) => res.status(200).send(values))
  } catch (err) {
    res.status(400).send({ message: 'error: ' + err })
  }
}
