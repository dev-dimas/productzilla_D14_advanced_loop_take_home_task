const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('=== Pasangan penjumlahan 17 ===');
for (let firstNum = 0; firstNum < arrayNumber.length; firstNum++) {
  for (let secondNum = 0; secondNum < arrayNumber.length; secondNum++) {
    if (arrayNumber[firstNum] + arrayNumber[secondNum] === 17) {
      console.log(`${arrayNumber[firstNum]} + ${arrayNumber[secondNum]} = 17`);
    }
  }
}

// ==================================================================

const firstStr = 'hello';
const secondStr = 'world';
console.log('\n=== Huruf yang sama dari dua buah string ===');
for (let firstChar = 0; firstChar < firstStr.length; firstChar++) {
  for (let secondChar = 0; secondChar < secondStr.length; secondChar++) {
    if (firstStr[firstChar] === secondStr[secondChar]) {
      console.log(firstStr[firstChar]);
    }
  }
}
