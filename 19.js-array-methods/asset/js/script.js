const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}             //false elave olunmayib

//#add 'Meat' - əgər artıq əlavə olunmayıbsa, arrayin əvvəlinə əlavə et.  
console.log(shoppingCart);// ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']
//#add Sugar - əgər artıq əlavə olunmayıbsa, arrayin sonuna əlavə et.  
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}              //false
console.log(shoppingCart);

//#remove 'Honey' - əgər array de "Honey" varsa , onu arraydan sil.
// ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']
let honeyindex = shoppingCart.indexOf("Honey")
if (honeyindex !== -2) {
    shoppingCart.splice(honeyindex, 1)
}
console.log(shoppingCart);

let teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
// #Reverse – countries array-ini reverse() metodu ilə tərsinə çevir.

const countryReverse = countries.reverse()
console.log(countryReverse);

// #remove "Canada" və "Denmark", və #add "Azerbaijan" (splice ilə).



let canadaIndex = countries.indexOf('Canada');
if (canadaIndex !== -1) {
    countries.splice(canadaIndex, 1);
}

let denmarkIndex = countries.indexOf('Denmark');
if (denmarkIndex !== -1) {
    countries.splice(denmarkIndex, 1);
}

// Azerbaijan əlavə edirik 2 den basla silme elave et
countries.splice(2, 0, 'Azerbaijan');

console.log(countries);


// 3)Aşağıdakı iki dəyişəni birləşdir və nəticəni fullStack adlı dəyişəndə saxla.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);


// 4) const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]
// #Slice – array-dən ilk 3 şirkəti ayır (çıxart).

// #Slice – array-dən son 3 şirkəti çıxart.
// #Slice – array-dən orta hissədə olan IT şirkətini və ya şirkətləri ayır.
// #Sort – şirkətlər array-ini sort() metodu ilə sıralayın.
// #Change – hər şirkətin adını bir-bir böyük hərflərə çevir və onları ekrana yazdır.
// #Check – "Google" şirkəti itCompanies array-ində varsa, onu qaytar; yoxdursa "company is not found" mesajını qaytar.
// #Filter – filter metodu istifadə etmədən, içində bir neçə dənə ‘o’ hərfi olan şirkətləri ayır (çıxart).

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
const newItCompany = itCompanies.slice(0, 3)
console.log(newItCompany);/// ['Facebook', 'Google', 'Microsoft']
const lastItCompany = itCompanies.slice(-3)
console.log(lastItCompany);//['IBM', 'Oracle', 'Amazon']
console.log(itCompanies.sort((a, b) => a.localeCompare(b)));

itCompanies.forEach(bigWord => {
    console.log(bigWord.toUpperCase());
});


if (itCompanies.includes("Google")) {
    console.log("Google");
} else {
    console.log("company is not found");
}


let result = [];

for (let company of itCompanies) {
    let count = 0;

    for (let char of company.toLowerCase()) {
        if (char === 'o') count++;
    }

    if (count >= 2) {
        result.push(company);
    }
}

console.log(result);
// 5)Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.
// gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib 
// bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*'
//  gonderilerse output -> 1*2*3*4 string-i olmalidir.
function mergeArrays(arr1, arr2, char) {
    let merged = [...arr1, ...arr2];
    return merged.join(char);
}

console.log(mergeArrays([1, 2], [3, 4], '*'));



console.log("--------------");

let arr = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
const newFiltArray = arr.filter(obj => obj.name[0] === "t")
console.log(newFiltArray);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
const tstartend = arr.filter(obj => obj.name[0] === "t" && obj.name[obj.name.length - 1] === "t")
console.log(tstartend);
// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let sum = 0;
arr.forEach(obj => {
    if (obj.name[0] === "t" && obj.name[obj.name.length - 1] === "t") {
        sum += obj.key
    }
}

)
console.log(sum);
// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
let endWhithe = arr.filter(obj => {
    if (
        obj.name[obj.name.length - 1] === "e") { obj.name = "SuperDev" }
})
console.log(arr);
// 5) "name"-i en uzun olan obyekti tapin
let lengtobyekt = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i].name.length > lengtobyekt.name.length) {
        lengtobyekt = arr[i]
    }
}
console.log(lengtobyekt);


// 6) "name"-i en uzun olan obyektin key'ni tapin
console.log(lengtobyekt.key);


// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

let index = arr.indexOf(lengtobyekt)
console.log(index ** 2);

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
let name4 = arr.filter(obj => obj.name.length === 4);
console.log(name4);


// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

let bigKey = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i].key > bigKey) {
        bigKey = arr[i];
    }
}

console.log(bigKey.name);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.


let twoLIndexes = [];

arr.forEach((obj, i) => {
    let count = 0;

    for (let char of obj.name) {
        if (char === 'l') count++;
    }

    if (count >= 2) twoLIndexes.push(i);
});

console.log(twoLIndexes);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
let twoT = arr.filter(obj => {
    let count = 0;

    for (let ch of obj.name) {
        if (ch === 't') count++;
    }

    return count >= 2;
});

console.log(twoT);
// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
let netice = arr.filter(obj =>
    obj.key > 10 && obj.name[0] === "l"
);

console.log(netice);

