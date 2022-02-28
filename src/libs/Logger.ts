import chalk from 'chalk';
import moment from 'moment';

export default class Logger {
  public static debug(...params: any[]): void {
    this.message(chalk.bgBlueBright('DEBUG'), ...params);
  }

  public static danger(...params: any[]): void {
    this.message(chalk.redBright('DANGER'), ...params);
  }

  public static info(...params: any[]): void {
    this.message(chalk.blueBright('INFO'), ...params);
  }

  public static warning(...params: any[]): void {
    this.message(chalk.yellowBright('WARNING'), ...params);
  }

  public static success(...params: any[]): void {
    this.message(chalk.greenBright('SUCCESS'), ...params);
  }

  private static message(...params: any[]): void {
    const date = `[${chalk.bold(moment().format('YYYY-MM-DD HH:mm:ss.SSS'))}]`;

    console.log(
      [date, ...params.map((v) => (typeof v === 'object' ? '\n' + JSON.stringify(v, null, 2) : v))].join(' ')
    );
  }
}
