export class Ops {
    public static add(a: number, b: number): number {
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        return a - b;
    }

    public static mulitply(a: number, b: number): number {
        return a * b;
    }

    public static divide(a: number, b: number): number {
        return a / b;
    }
    
    public static power(a: number, exp: number): number {
        let result: number = 1;
        
        for (let i: number = 0; i < exp; i++)
            result *= a;

        return result;
    }
    
    public static greatestCommonDenominator(a: number, b: number): number {
        if (a < b) {
            let tmp: number = a; a = b; b = tmp;
        }
        while (b > 0) {
            let c: number = a % b; a = b; b = c;
        }
        return a;
    }
}