import binance from './clients/binance'
import Notifier from './notifier'
import { EXECUTION_REPORT_STATUSES } from './config'

const notifier = new Notifier()

binance.ws
  .user((message) => {
    if (message.eventType === 'executionReport' && EXECUTION_REPORT_STATUSES.includes(message.orderStatus)) {
      notifier.notify('execution_report', message)
    }
  })
  .catch(() => process.exit(1))
