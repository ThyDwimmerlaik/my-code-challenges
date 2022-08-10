type consType = (f: (a: number, b: number) => number ) => number;

export const cons = (a: number, b: number): consType => {
    const pair = (f: (a: number, b: number) => number ) => {
        return f(a,b);
    }
    return pair;
}

export const car = (pair: consType): number => pair((a: number, b: number) => a);
export const cdr = (pair: consType): number => pair((a: number, b: number) => b);
