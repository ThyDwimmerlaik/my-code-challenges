import { sumAllArray } from "./sumAllArray";

describe("sumAllArray function behaviour", () => {
    
    test('array [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24]', () => {
        expect(sumAllArray([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    });
    
    test('array [3, 2, 1] should return [2, 3, 6]', () => {
        expect(sumAllArray([3, 2, 1])).toEqual([2, 3, 6]);
    });

    test('empty array should return another empty array', () => {
        expect(sumAllArray([]).length).toBe(0)
    })
    
})