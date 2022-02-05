import Binance from 'binance-api-node'
import { BINANCE_KEY, BINANCE_SECRET } from '../config'

const binance = Binance({
  apiKey: BINANCE_KEY,
  apiSecret: BINANCE_SECRET,
})

// ping api every 5 minutes
setInterval(() => {
  binance.ping().catch(() => process.exit(1))
}, 5 * 60 * 1000)

export default binance
