let number = 12;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}


let numb = 12;
let count = 0;

for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
        count++;
    }
}

console.log("12 ədədinin " + count + " böləni var");


let tek = 0;
let cut = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        cut += i;
    } else {
        tek += i;
    }
}

console.log("Tək ədədlərin cəmi:", tek);
console.log("Cüt ədədlərin cəmi:", cut);


let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own/hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
and new features happen.`;

let spaceCount = 0;

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === " ") {
        spaceCount++;
    }
}

console.log("Mətn daxilində", spaceCount, "boşluq var");




const eded = [3, 7, 12, 20, 25];
let input = 12;
let found = false;

for (let i = 0; i < eded.length; i++) {
    if (eded[i] === input) {
        found = true;
        break;
    }
}

if (found) {
    
    console.log(input + " array daxilində mövcuddur");
} else {
    console.log(input + " array daxilində yoxdur");
}


const reqemler = [4, 2, 7, 9, 3, 12, 46, 32, 19];

let min = reqemler[0];
let max = reqemler[0];

for (let i = 1; i < reqemler.length; i++) {
    if (reqemler[i] < min) {
        min = reqemler[i];
    }
    if (reqemler
        [i] > max) {
        max = reqemler[i];
    }
}

console.log("Minimum:", min);
console.log("Maksimum:", max);


const fruits = ["alma", "banan", "qarpız", "portagal", "ananas", "nar"];

let longest = fruits[0];

for (let i = 1; i < fruits.length; i++) {
    if (fruits[i].length > longest.length) {
        longest = fruits[i];
    }
}

console.log("Ən uzun söz:", longest);
console.log("Uzunluğu:", longest.length);


let str = "racecar";
let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log(str, "palindromdur");
} else {
    console.log(str, "palindrom deyil");
}



for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}




const products = [
    { id: 1, title: "Smartphone", description: "A high-end smartphone.", price: 799.99 },
    { id: 2, title: "Laptop", description: "Powerful laptop.", price: 1299.99 },
    { id: 3, title: "Coffee Maker", description: "Automatic coffee maker.", price: 99.99 },
    { id: 4, title: "Headphones", description: "Wireless noise-cancelling headphones.", price: 199.99 },
    { id: 5, title: "Smart TV", description: "55-inch smart TV.", price: 699.99 }
];

let total = 0;

for (let i = 0; i < products.length; i++) {
    total += products[i].price;
}

let avg = total / products.length;

console.log("Cəm:", total.toFixed(2));
console.log("Ortalama:", avg.toFixed(2));

