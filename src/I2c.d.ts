import { Buffer } from 'buffer';

export const I2C_STD: number;
export const I2C_FAST: number;
export const I2C_HIGH: number;

export class I2c {
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