function convertFromBinaryToDecimal(binaryNum) {

    let sum = 0;
    let position = 0;

    for (let index = binaryNum.length - 1; index >= 0; index--) {

        let currentDigit = Number(binaryNum[index]);

        sum += currentDigit * (2 ** position);

        position++;

    }
    
    console.log(sum);
}

convertFromBinaryToDecimal('1010010101001')
