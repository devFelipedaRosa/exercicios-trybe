const { encode, decode } = require ('./encodeDecode');

describe ('testing encode and decode functions', () => {
    test ('if encode is a function', () => {
        expect (typeof encode).toBe ('function');
    });

    test ('if decode is a function', () => {
        expect (typeof decode).toBe ('function');
    });

    test ('if encode converts a,e,i,o,u into 1,2,3,4,5', () => {
        expect (encode('aeiou')).toBe ('12345');
    });

    test ('if decode converts 1,2,3,4,5 into a,e,i,o,u', () => {
        expect (decode('12345')).toBe ('aeiou');
    });

    test ('if encode does not convert b,c,f,g,h', () => {
        expect (encode('bcfgh')).toBe ('bcfgh');
    });

    test ('if decode does not convert 6,7,8,9,10', () => {
        expect (decode('67890')).toBe ('67890');
    });

    test ('if returned string has the same length as input', () => {
        expect (encode('aeiou').length).toEqual (5);
    });
});
