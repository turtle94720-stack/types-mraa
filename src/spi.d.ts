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