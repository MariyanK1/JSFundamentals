function convertFromDecimalToBinary(decimalNum) {
    let result = '';

    while (decimalNum > 0) {
        result = (decimalNum % 2) + result;
        decimalNum = Math.trunc(decimalNum / 2);
    }

    console.log(result)
}

convertFromDecimalToBinary('23')
