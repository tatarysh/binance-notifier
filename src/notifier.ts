import events, { EVENTS } from './events'
import telegram from './clients/telegram'
import { TELEGRAM_CHAT_ID } from './config'
import Mustache from 'mustache'
import { ExecutionReport } from 'binance-api-node'
import Logger from './libs/Logger'

export default class Notifier {
  notify(event: 'execution_report', payload: ExecutionReport)

  notify(event: EVENTS, payload: object) {
    const channels = events[event] || {}

    for (const [channel, template] of Object.entries(channels)) {
      if (channel === 'telegram') {
        telegram.telegram
          .sendMessage(TELEGRAM_CHAT_ID, Mustache.render(template, payload))
          .then(() => Logger.info('Message sent via telegram.'))
          .catch((err) => Logger.danger('There was an error sending your message via Telegram.', err.message))
      }
    }
  }
}
