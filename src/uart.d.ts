import { Buffer } from 'buffer';

export const UART_PARITY_NONE: number;
export const UART_PARITY_EVEN: number;
export const UART_PARITY_ODD: number;
export const UART_PARITY_MARK: number;
export const UART_PARITY_SPACE: number;

export class Uart {
    public constructor(uart: number);
    public constructor(path: string);
    public getDevicePath(): string;
    public read(length: number): Buffer;
    public write(length: number): number;
    public readStr(length: number): string;
    public writeStr(data: string): number;
    public dataAvailable(millis: number): boolean;
    public flush(): number;
    public setBaudRate(baud: number): number;
    public setMode(bytesize: number, parity: number, stopbits: number): number;
    public setFlowControl(xonxoff: boolean, rtscts: boolean): number;
    public setTimeout(read: number, write: number, interchar: number): number;
}