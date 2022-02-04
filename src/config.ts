import 'dotenv/config'

/**
 * ██████╗ ██╗███╗   ██╗ █████╗ ███╗   ██╗ ██████╗███████╗
 * ██╔══██╗██║████╗  ██║██╔══██╗████╗  ██║██╔════╝██╔════╝
 * ██████╔╝██║██╔██╗ ██║███████║██╔██╗ ██║██║     █████╗
 * ██╔══██╗██║██║╚██╗██║██╔══██║██║╚██╗██║██║     ██╔══╝
 * ██████╔╝██║██║ ╚████║██║  ██║██║ ╚████║╚██████╗███████╗
 * ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
 */
export const BINANCE_KEY = process.env.BINANCE_API_KEY as string
export const BINANCE_SECRET = process.env.BINANCE_SECRET_KEY as string

/**
 * ████████╗███████╗██╗     ███████╗ ██████╗ ██████╗  █████╗ ███╗   ███╗
 * ╚══██╔══╝██╔════╝██║     ██╔════╝██╔════╝ ██╔══██╗██╔══██╗████╗ ████║
 *    ██║   █████╗  ██║     █████╗  ██║  ███╗██████╔╝███████║██╔████╔██║
 *    ██║   ██╔══╝  ██║     ██╔══╝  ██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║
 *    ██║   ███████╗███████╗███████╗╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║
 *    ╚═╝   ╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
 */

export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN as string
export const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID as string

if ([BINANCE_KEY, BINANCE_SECRET, TELEGRAM_TOKEN, TELEGRAM_CHAT_ID].some((v) => !v)) {
  console.log('-----------------------------------------------------------------')
  console.log('Environment variables must be set before running the application:\n')
  console.log('- BINANCE_API_KEY\n- BINANCE_SECRET_KEY\n- TELEGRAM_TOKEN\n -TELEGRAM_CHAT_ID')
  console.log('-----------------------------------------------------------------')

  process.exit(1)
}
