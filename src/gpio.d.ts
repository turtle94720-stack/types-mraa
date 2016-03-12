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
    public constructor(pin: number);
    public constructor(pin: number, owner: boolean, raw: boolean);
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