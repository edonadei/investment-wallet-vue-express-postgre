export default function deleteStocks(req, res) {
  try {
    Stock.getAll().then((values) => res.status(200).json(values))
  } catch (err) {
    res.status(400).send({ message: 'error: ' + err })
  }
}
