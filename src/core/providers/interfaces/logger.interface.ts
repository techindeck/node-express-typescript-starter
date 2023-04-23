/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILogger {
    debug?(message: string, meta?: any): void;
    info(message: string, meta?: any): void;
    warn(message: string, meta?: any): void;
    error(message: string, meta?: any): void;
}
