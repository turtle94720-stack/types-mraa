export class Iio {
    public constructor(device: number);
    public getDeviceName(): string;
    public registerEventHandler(handler: Iio): void;
}