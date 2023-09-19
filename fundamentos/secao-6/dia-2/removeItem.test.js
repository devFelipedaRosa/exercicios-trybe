const removeItem = require('./removeItem');

describe ('test removeItem function', () => {
    test ('if removeItem returns [1, 2, 4]', () => {
      expect (removeItem ([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test ('if removeItem does NOT return [1, 2, 3, 4]', () => {
        expect (removeItem ([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test ('if removeItem returns [1, 2, 3, 4]', () => {
        expect (removeItem ([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
})