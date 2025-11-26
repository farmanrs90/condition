let x = 15;
if (x % 2 === 0) {
    console.log("cut reqemdir"); 0.
}
else {
    console.log("tek reqemdir");
}


let y = 8;
if (y % 2 === 0) {
    console.log("cut reqemdir"); 0.
}
else {
    console.log("tek reqemdir");
}
// deyer tek ve cut oldugunu 2 ye bolmekle izahi

let a = 7, b = 7, c = 7;
if (a == b && b == c) {
    console.log("bu 3 bucaq beraberterefli ucbucaqdir");


}
else {
    console.log("beraberterefli deyil");
}
let s = 4, v = 5, z = 6;
if (s == v && v == z) {
    console.log("bu 3 bucaq beraberterefli ucbucaqdir");


}
else {
    console.log("beraberterefli deyil");
}
// beranerterefli ucbucaq veve ile
let katet1 = 3, katet2 = 4, hipotenuz = 5;


if (katet1 * 2 + katet2 * 2 === hipotenuz ** 2) {
    console.log(" düzbucaqli 3bucaqdir");
} else {
    console.log("düzbucaqli 3bucaq deyil");

}
// demeli 2 ye hasilin cemi hipotonuzun kvadratina berbaerdise duzbucaqli deyilse duzbucaqli deyil 
let number = 1234;
let digits = number.toString().split("").map(Number);

let sum = digits.reduce((a, b) => a + b, 0);
let product = digits.reduce((a, b) => a * b, 1);
let average = sum / digits.length;

console.log("Rəqəmlərin cəmi:", sum);
console.log("Rəqəmlərin hasili:", product);
console.log("Rəqəmlərin ədədi ortası:", average);
// bunu bilmedim ai den kocurdum izah edersiz
let month = "may";
switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} bu ay 31 dendi`);
        break;
    case "february":
        console.log(`${month}bbu ay 28 dendi`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} bu aylar 30 dandi`);
    default:
        console.log("nese sehvlik var)");
        break;
}
// toLowerCase sozunde L kicikle yazmisdim deye cxox vaxtim getdi))
let bal = 60;

if (bal >= 90 && bal <= 100) {
    console.log("A");
} else if (bal <= 89 && bal >= 80) {
    console.log("B");
} else if (bal <= 79 && bal >= 70) {
    console.log("C");
} else if (bal <= 69 && bal >= 60) {
    console.log("D");
}
else if (bal < 60 && bal >= 0) {
    console.log("F");
} else {
    console.log("bele bir bal yoxdu");
}

// ve ve istifade ederek hell sonraki tapsiriqda hemcinin ve ve
let l = 5;
let m = 2;
let n = 9;

if (l >= m && l >= n) {
  console.log("l ən böyük ədəddir");
} else if (m >= l && m >= n) {
  console.log("m ən böyük ədəddir");
} else {
  console.log("n ən böyük ədəddir");
}


