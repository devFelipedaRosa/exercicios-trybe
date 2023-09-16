const checkInputs = (number1, number2, number3, number4) => {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number' || typeof number4 !== 'number') {
        throw new Error ('Os valores informados devem ser números');
    }
}

const calculateAverage = (number1, number2, number3, number4) => {
    try {
      checkInputs(number1, number2, number3, number4);
      const average = (number1 + number2 + number3 + number4) / 4;
      return average;
    } catch (error) {
      return error.message;
        
    }
    
}

console.log(calculateAverage(5, 10 , '15', 20));