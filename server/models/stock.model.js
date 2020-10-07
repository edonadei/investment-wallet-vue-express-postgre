import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const stocksFile = path.join(__dirname, '../data/stocks.json')

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
    return await JSON.parse(readFile(stocksFile, 'utf8'))
  }
}
