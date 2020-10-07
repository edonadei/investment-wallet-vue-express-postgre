import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const stocksFile = 'server/data/stocks.json'

export class Stock {
  /** @type {Number} */
  id
  /** @type {String} */
  name
  /** @type {Number} */
  shares
  /** @type {Number} */
  value
  /** @type {Number} */
  result

  /**
   * @returns {Promise<Stock[]>}
   */
  static async getAll() {
    return await readFile(stocksFile, 'utf8').then((data) => JSON.parse(data))
  }

  static async get(id) {
    const data = await readFile(stocksFile, 'utf8').then((data) =>
      JSON.parse(data)
    )
    const stockFound = data.find((stock) => stock.id === parseInt(id))
    if (stockFound) {
      return stockFound
    } else {
      throw Error('Could not find any stocks with this ID')
    }
  }

  static async add(name, shares, value, result) {}
  static async remove(id) {}
  static async edit(id, name, shares, value, result) {}
}
