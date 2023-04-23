/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogLevel } from '../enums/log-level.enum';
import { ILogger } from '../interfaces/logger.interface';
import { LogFormatter } from './log.formatter';
import chalk from 'chalk';

class ConsoleLogger implements ILogger {
    private readonly formatter: LogFormatter = new LogFormatter();
    private static readonly logger = console.log;

    debug(message: string, meta?: any): void {
        logger.debug(chalk.yellowBright(this.formatter.format(LogLevel.DEBUG, message, meta)));
    }

    log(message: string, meta?: any): void {
        this.log(message, meta);
    }

    info(message: string, meta?: any): void {
        console.info(chalk.blueBright(this.formatter.format(LogLevel.INFO, message, meta)));
    }

    warn(message: string, meta?: any): void {
        console.warn(chalk.yellowBright(this.formatter.format(LogLevel.WARN, message, meta)));
    }

    error(message: string, meta?: any): void {
        console.error(chalk.redBright(this.formatter.format(LogLevel.ERROR, message, meta)));
    }
}

const logger = new ConsoleLogger();
export { logger };
