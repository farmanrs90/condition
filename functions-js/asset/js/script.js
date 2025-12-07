function maxOfThree(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

console.log(maxOfThree(12, 4, 8)); //12
console.log(maxOfThree(5, 5, 4));//5
console.log(maxOfThree(2, 6, 5));//6
console.log(maxOfThree(2, 6, 9));//9

function calculateDiscount(price, discountPercent) {
    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
        return "Xəta mesaji";
    }

    let discountPrice = (price * discountPercent) / 100
    let finalprice = price - discountPrice
    return finalprice;
}
console.log(calculateDiscount(100, 20));   // 80
console.log(calculateDiscount(59.9, 15));  // 50.92
console.log(calculateDiscount(200, 0));    // 200
console.log(calculateDiscount(150, 110));  // Xəta
console.log(calculateDiscount(-10, 10));   // Xəta


function findAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length


    //   let Average= sum / array.length  .....belede yaza bilirik
    //     return Average


}
console.log(findAverage([1, 2, 3])) // Average: 2
console.log(findAverage([15, 25, 10, 30])) // Average: 20


const divisorCountSimple = (number) => {
    let countOfDivine = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {

            countOfDivine++
        }

    } return countOfDivine

}
console.log(divisorCountSimple(55));//4
console.log(divisorCountSimple(1)); // 1
console.log(divisorCountSimple(6)); // 4
console.log(divisorCountSimple(12));// 6
console.log(divisorCountSimple(25)); // 3
console.log(divisorCountSimple(100));// 9

function getGradeByScore(score) {
    if (score < 0 || score > 100) return "Xeta";
    if (score >= 80) return "**A**"
    if (score >= 70) return "**B**"
    if (score >= 60) return "**C**"
    if (score >= 50) return "**D**"
    return "**F**"

}

console.log(getGradeByScore(85)) // A
console.log(getGradeByScore(68)) // C


const reverseString = (str) => {
    let reverstr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverstr += str[i]

    }
    return reverstr

}
console.log(reverseString("code")); ///edoc
console.log(reverseString("hello"));////olleh


function sumRange(start, end) {
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += i

    }
    return sum
}

console.log(sumRange(1, 4)) // 1+2+3+4 = 10
console.log(sumRange(4, 6)) // 4+5+6 = 15

const doubleArray = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)


    }
    return newArray
}
console.log(doubleArray([1, 2, 3]));





function sentenceCapitalization(sentence) {
    let words = sentence.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        // ilk hərfi böyük, qalanı olduğu kimi əlavə et
        result += word[0].toUpperCase() + word.slice(1);
        if (i < words.length - 1) {
            result += " "; // sözlər arasında boşluq
        }
    }

    return result;
}

console.log(sentenceCapitalization("a short sentence")); // A Short Sentence
console.log(sentenceCapitalization("hello world"));      // Hello World
// 9 cu tapsirigi yaza bilmedim baxdimda anlamadim gedisati basa duse
// duse yaziram ama men bunu tezden yaza bilmirem




function power(a, b) {
    return a ** b
}
let num1=Number(prompt("1-ci ededi daxil edin"))
let num2=Number(prompt("2-ci ededi daxil edin"))
// let num1 = prompt("1-ci ededi daxil edin")
// let num2 = prompt("2-ci ededi daxil edin") //mence belede yazmaq olar cunki vurmada string itir??

console.log(power(3,3));
console.log(power(4,2));
console.log(power(3,2));
console.log(power(2,2));




