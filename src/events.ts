import path from 'path'
import fs from 'fs'

export type EVENTS = 'execution_report'

type NotifierEvents = {
  [key in EVENTS]: {
    telegram?: string
  }
}

const events: NotifierEvents = {
  execution_report: {
    telegram: fs.readFileSync(path.resolve(__dirname, '../templates/telegram/order.txt')).toString(),
  },
}

export default events
