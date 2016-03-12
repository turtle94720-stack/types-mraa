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