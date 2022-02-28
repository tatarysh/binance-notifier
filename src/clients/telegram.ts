import { TELEGRAM_TOKEN } from '../config'
import { Telegraf } from 'telegraf'
import Logger from '../libs/Logger'

const telegram = new Telegraf(TELEGRAM_TOKEN)

telegram
  .launch({})
  .then(() => Logger.info('Telegram connected.'))
  .catch((err) => {
    Logger.danger('An error occurred while connecting to Telegram.', err.message)
    process.exit(1)
  })

// Enable graceful stop
process.once('SIGINT', () => telegram.stop('SIGINT'))
process.once('SIGTERM', () => telegram.stop('SIGTERM'))

export default telegram
