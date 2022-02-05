import 'dotenv/config'

const split = (setting: string, separator = ',') => setting.split(separator).filter(Boolean)

/**
 *   ____  _
 *  | __ )(_)_ __   __ _ _ __   ___ ___
 *  |  _ \| | '_ \ / _` | '_ \ / __/ _ \
 *  | |_) | | | | | (_| | | | | (_|  __/
 *  |____/|_|_| |_|\__,_|_| |_|\___\___|
 */
export const BINANCE_KEY = process.env.BINANCE_API_KEY as string
export const BINANCE_SECRET = process.env.BINANCE_SECRET_KEY as string

/**
 *   _____    _
 *  |_   _|__| | ___  __ _ _ __ __ _ _ __ ___
 *    | |/ _ \ |/ _ \/ _` | '__/ _` | '_ ` _ \
 *    | |  __/ |  __/ (_| | | | (_| | | | | | |
 *    |_|\___|_|\___|\__, |_|  \__,_|_| |_| |_|
 *                   |___/
 */

export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN as string
export const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID as string

/**
 *   _____                 _
 *  | ____|_   _____ _ __ | |_ ___
 *  |  _| \ \ / / _ \ '_ \| __/ __|
 *  | |___ \ V /  __/ | | | |_\__ \
 *  |_____| \_/ \___|_| |_|\__|___/
 */
export const EXECUTION_REPORT_STATUSES = split(process.env.EXECUTION_REPORT_ONLY_STATUS || 'FILLED,PARTIALLY_FILLED')

if ([BINANCE_KEY, BINANCE_SECRET, TELEGRAM_TOKEN, TELEGRAM_CHAT_ID].some((v) => !v)) {
  console.log('-----------------------------------------------------------------')
  console.log('Environment variables must be set before running the application:\n')
  console.log('- BINANCE_API_KEY\n- BINANCE_SECRET_KEY\n- TELEGRAM_TOKEN\n -TELEGRAM_CHAT_ID')
  console.log('-----------------------------------------------------------------')

  process.exit(1)
}
