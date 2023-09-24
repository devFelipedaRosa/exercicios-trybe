const numbers = [4, 9, -1, 16, -5, 25];

const createSquareRoot = () => {
    let roots = numbers.map ((number) => Math.sqrt(number));
    return roots;
};

console.log(createSquareRoot(numbers));