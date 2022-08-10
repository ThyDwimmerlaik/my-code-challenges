import { cons, car, cdr } from "./Cons";

describe("car and cdr function behaviour", () => {
    
    test('car pair (1,2) should return 1', () => {
        expect(car(cons(1, 2))).toEqual(1);
    });
    
    test('cdr pair (1,2) should return 2', () => {
        expect(cdr(cons(1, 2))).toEqual(2);
    });
    
    test('car pair (4,7) should return 4', () => {
        expect(car(cons(4,7))).toEqual(4);
    });
    
    test('cdr pair (4,7) should return 4', () => {
        expect(cdr(cons(4,7))).toEqual(7);
    });

    test('car pair (9,0) should return 9', () => {
        expect(car(cons(9,0))).toEqual(9);
    });
    
    test('cdr pair (9,0) should return 0', () => {
        expect(cdr(cons(9,0))).toEqual(0);
    });
    
})