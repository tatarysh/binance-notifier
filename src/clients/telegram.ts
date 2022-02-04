import { TELEGRAM_TOKEN } from '../config'
import { Telegraf } from 'telegraf'

const telegram = new Telegraf(TELEGRAM_TOKEN)

telegram.launch({})

export default telegram
