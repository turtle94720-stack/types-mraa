export class Aio {
    public constructor(pin: number);
    public read(): number;
    public readFloat(): number;
    public setBit(bits: number): number;
    public getBit(): number;
}