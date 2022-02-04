import Binance from 'binance-api-node'
import { BINANCE_KEY, BINANCE_SECRET } from '../config'

const binance = Binance({
  apiKey: BINANCE_KEY,
  apiSecret: BINANCE_SECRET,
})

setInterval(() => binance.ping(), 5 * 60 * 1000) // ping api every 5 minutes

export default binance
