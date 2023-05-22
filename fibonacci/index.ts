export const fibonacciValue = (index: number): number => {
    
    // Validate input (positive integer)
    
    // 0  1 
    // v1 v2

    // 1  1 
    // v1 v2

    // 1  2
    // v1 v2

    // 2  3
    // v1 v2

    // 0  1  1  2  3 5 8 
    // example index=4 return 3
    
    // initialize two first values
    let v1: number = 0;
    let v2: number = 1;

    if (index === 0) {
        return v1;
    }
    // iterate index number of times
    for (let i = 0; i < index; i++) {
        // v1 ==0
        // v2 ==1
        const v3 = v2;
        v2 = v2 + v1;
        v1 = v3;
    }
    return v1;

    // add two previous values

    // update v1 and v2

    // at the end of the loop return v2
    
}