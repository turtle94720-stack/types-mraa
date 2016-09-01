// Type definitions for MRAA v1.3.0
// Project: https://github.com/intel-iot-devkit/mraa
// Definitions by: Snow Crab Software, LLC <https://github.com/snowcrab/>
// Definitions: https://github.com/snowcrab/mraa-typescript

import { Buffer } from 'buffer';

/* Common */

export const SUCCESS: number;
export const ERROR_FEATURE_NOT_IMPLEMENTED: number;
export const ERROR_FEATURE_NOT_SUPPORTED: number;
export const ERROR_INVALID_VERBOSITY_LEVEL: number;
export const ERROR_INVALID_PARAMETER: number;
export const ERROR_INVALID_HANDLE: number;
export const ERROR_NO_RESOURCES: number;
export const ERROR_INVALID_RESOURCE: number;
export const ERROR_INVALID_QUEUE_TYPE: number;
export const ERROR_NO_DATA_AVAILABLE: number;
export const ERROR_INVALID_PLATFORM: number;
export const ERROR_PLATFORM_NOT_INITIALISED: number;
export const ERROR_PLATFORM_ALREADY_INITIALISED: number;
export const ERROR_UNSPECIFIED: number;

/* GPIO */
export const EDGE_NONE: number;
export const EDGE_BOTH: number;
export const EDGE_RISING: number;
export const EDGE_FALLING: number;

export const MODE_STRONG: number;
export const MODE_PULLUP: number;
export const MODE_PULLDOWN: number;
export const MODE_HIZ: number;

export const DIR_OUT: number;
export const DIR_IN: number;
export const DIR_OUT_HIGH: number;
export const DIR_OUT_LOW: number;

export class Gpio {
    public constructor(pin: number, owner?: boolean, raw?: boolean);
    public edge(mode: number): number;
    public isr(mode: number, func: () => void): number;
    public isrExit(): number;
    public mode(mode: number): number;
    public dir(dir: number): number;
    public readDir(): number;
    public read(): number;
    public write(value: number): number;
    public useMmap(enable: boolean): number;
    public getPin(raw?: boolean): number;
}

/* AIO */

export class Aio {
    public constructor(pin: number);
    public read(): number;
    public readFloat(): number;
    public setBit(bits: number): number;
    public getBit(): number;
}

/* I2C */

export const I2C_STD: number;
export const I2C_FAST: number;
export const I2C_HIGH: number;

export class I2c {
    public constructor(bus: number);
    public constructor(bus: number, raw: boolean);
    public frequency(mode: number): number;
    public address(address: number): number;
    public readByte(): number;
    public read(length: number): Buffer;
    public readReg(reg: number): number;
    public readWordReg(reg: number): number;
    public writeByte(data: number): number;
    public write(length: number): number;
    public writeReg(reg: number, data: number): number;
    public writeWordReg(reg: number, data: number): number;
}

/* SPI */

export const SPI_MODE0: number;
export const SPI_MODE1: number;
export const SPI_MODE2: number;
export const SPI_MODE3: number;

export class Spi {
    public constructor(bus: number);
    public constructor(bus: number, cs: number);
    public mode(mode: number): number;
    public frequency(hz: number): number;
    public writeByte(data: number): number;
    public write_word(data: number): number;
    public lsbmode(lsb: boolean): number;
    public bitPerWord(bits: number): number;
}

/* PWM */

export class Pwm {
    public constructor(pin: number);
    public constructor(pin: number, owner: boolean, chipid: number);
    public write(percentage: number): number;
    public read(): number;
    public period(period: number): number;
    public period_ms(ms: number): number;
    public period_us(us: number): number;
    public pulsewidth(seconds: number): number;
    public pulsewidth_ms(ms: number): number;
    public pulsewidth_us(us: number): number;
    public enable(enable: boolean): number;
    public config_ms(period: number, duty: number): number;
    public config_percent(period: number, duty: number): number;
    public max_period(): number;
    public min_period(): number;
}

/* UART */

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

/* IIO */

export class Iio {
    public constructor(device: number);
    public getDeviceName(): string;
    public registerEventHandler(handler: Iio): void;
}