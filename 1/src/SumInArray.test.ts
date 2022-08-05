import { sumInArray } from "./SumInArray";

describe("sumInArray function behaviour", () => {
    
    test('verifies array with existing sum', () => {
        expect(sumInArray([50, 10, 15, 3, 7], 17)).toBe(true);
    });
    
    test('verifies array with non existing sum', () => {
        expect(sumInArray([50, 10, 15, 3, 6], 17)).toBe(false);
    });

    test('verifies array with less than 2 elements', () => {
        expect(sumInArray([17], 17)).toBe(false);
    });
    
})