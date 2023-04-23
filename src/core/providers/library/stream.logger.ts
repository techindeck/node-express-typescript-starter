import { ILogger } from '../interfaces/logger.interface';
import fs from 'fs';
import { LogFormatter } from './log.formatter';
import { LogLevel } from '../enums/log-level.enum';

export class StreamLogger implements ILogger {
    public appStream: fs.WriteStream;
    public errStream: fs.WriteStream;
    private formatter: LogFormatter = new LogFormatter();

    constructor() {
        const { appFile, errorFile } = this.createLogFolderAndFileOnStartupOnDailyBasis();
        this.appStream = this.getApplicationStream(appFile);
        this.errStream = this.getErrorStream(errorFile);
    }

    info(message: string, meta?: any) {
        const log = this.formatter.format(LogLevel.INFO, message, meta);
        this.appStream.write(`${log}\n`);
    }

    warn(message: string, meta?: any) {
        const log = this.formatter.format(LogLevel.WARN, message, meta);
        this.errStream.write(`${log}\n`);
    }

    error(message: string, meta?: any) {
        const log = this.formatter.format(LogLevel.ERROR, message, meta);
        this.errStream.write(`${log}\n`);
    }

    private getApplicationStream(fileName: string): fs.WriteStream {
        this.appStream = fs.createWriteStream(`log/${fileName}`, { flags: 'a' });
        return this.appStream;
    }

    private getErrorStream(fileName: string): fs.WriteStream {
        this.errStream = fs.createWriteStream(`log/${fileName}`, { flags: 'a' });
        return this.errStream;
    }

    private createLogFolderAndFileOnStartupOnDailyBasis() {
        // crate log folder and file if not exists
        if (!fs.existsSync('log')) {
            fs.mkdirSync('log');
        }

        // create a file on each day
        const date = new Date();
        const appFile = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.application.log`;
        const errorFile = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.error.log`;

        if (!fs.existsSync(`log/${appFile}`)) {
            fs.writeFileSync(`log/${appFile}`, '');
        }

        if (!fs.existsSync(`log/${errorFile}`)) {
            fs.writeFileSync(`log/${errorFile}`, '');
        }

        return { appFile, errorFile };
    }

    // private formatLog(level: string, message: string, meta?: any) {
    //     const timestamp = new Date().toISOString();
    //     const metaStr = meta ? ` (${JSON.stringify(meta)})` : '';
    //     return `[${timestamp}] [${level}] ${message}${metaStr}`;
    // }
}
