export const sumAllArray = (array: Array<number>): Array<number> => {
    const result = new Array<number>;
    for(let i = 0; i < array.length; i ++){
        const tempArray = [...array];
        tempArray.splice(i, 1);
        result.push(tempArray.reduce((i: number, j: number) => i*j, 1));
    }
    return result;
}