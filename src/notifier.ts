import events, { EVENTS } from './events'
import telegram from './clients/telegram'
import { TELEGRAM_CHAT_ID } from './config'
import Mustache from 'mustache'
import { ExecutionReport } from 'binance-api-node'

export default class Notifier {
  notify(event: 'execution_report', payload: ExecutionReport)

  notify(event: EVENTS, payload: any) {
    const channels = events[event] || {}

    for (const [channel, template] of Object.entries(channels)) {
      if (channel === 'telegram') {
        telegram.telegram
          .sendMessage(TELEGRAM_CHAT_ID, Mustache.render(template, payload))
          .then(() => console.log('Message sent via telegram.'))
          .catch((err) => console.log(`Telegram error: "${err.message}"`))
      }
    }
  }
}
