type consType = (f: (a: number, b: number) => number ) => number;

export const cons = (a: number, b: number): consType => 
    (f: (a: number, b: number) => number ) => f(a,b);

export const car = (pair: consType): number => pair((a: number, b: number) => a);
export const cdr = (pair: consType): number => pair((a: number, b: number) => b);
