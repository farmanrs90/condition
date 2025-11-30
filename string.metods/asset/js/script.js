let start = 5
let end = 9
let sum = 0
for (let i = 5; i <= 9; i++) { sum += i }
console.log(sum);


// const text = "i,love,javascript,and,codding"
// let words = text.split(",");
// let countOfWords=words.length
// console.log(countOfWords); 

let text = "i love javascript and codding"
let words = text.split(" ");
let countOfWords = words.length
console.log(countOfWords);


// Mugayise



let a = "aZER"
//adin ilk herfi boyuk olsun qalanlari kicik
let boyuk = a.at(0).toUpperCase() + a.slice(1).toLowerCase()
console.log(boyuk);

//cumlede butun "a" herflerini ulduz ele
let sentence = "salam necesen dostum"
let newsentence = sentence.replaceAll("a", "*")
console.log(newsentence);
//replace ile birinci a ni deyisir replaceall ile butun a lari

//5)verilmis emailin domainin cixart
let email = "user123@gmail.com"
let newemail = email.slice(-9)
console.log(newemail);

// 6)cumlede en uzun sozu tapin
let sentences = "javascript is really powerfull language"
let soz = sentences.split(" "); // sözlərə ayırdıq
let longest = soz[0];           // ilk sözü ən uzun kimi götürürük

for (let i = 1; i < soz.length; i++) {
    if (soz[i].length > longest.length) {
        longest = soz[i];
    }
}

console.log(longest);
//javascript powerfull deyil

//7)
let cumle = "i love codding"
let sozler = cumle.split(" ")
let qisa = sozler[0]
for (let i = 1; i < sozler.length; i++) {
    if (sozler.length[i] < qisa.length) {
        qisa = sozler[i]

    }
}
console.log(qisa);
//basa dussemde casiram

let str ="hello"
str=str.padStart(str.length+1,"#")
str=str.padEnd(str.length+1,"#")
console.log(str);

