import { LogLevel } from '../enums/log-level.enum';

export class LogFormatter {
    format(level: LogLevel, message: string, meta?: any): string {
        const timestamp = new Date().toISOString();
        const metaStr = meta ? ` (${JSON.stringify(meta)})` : '';
        return `[${timestamp}] [${level.toUpperCase()}] ${message}${metaStr}`;
    }
}
