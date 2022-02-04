import binance from './clients/binance'
import telegram from './clients/telegram'
import { TELEGRAM_CHAT_ID } from './config'

binance.ws.user((message) => {
  if (message.eventType === 'executionReport' && ['FILLED', 'PARTIALLY_FILLED'].includes(message.orderStatus)) {
    telegram.telegram.sendMessage(TELEGRAM_CHAT_ID, JSON.stringify(message)).catch(() => {})
  }
})
