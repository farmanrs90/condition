let numbs = [12, 7, 3, 9, 6, 15, 8];
let numbsquard = [];

for (let i = 0; i < numbs.length; i++) {
    numbsquard.push(numbs[i] * numbs[i]);
}

console.log(numbsquard);



//2 ci sual
let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands"
];

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    console.log(country + " - " + country.length);
}

//3 cu tapsiriq

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];

    let first = country[0].toLowerCase();
    let last = country[country.length - 1].toLowerCase();

    if (first === "a" && last === "a") {
        console.log(country);
    }
}




// 4cu tapsiriq

const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
];

let newArray = [];

for (let i = 0; i < webTechs.length; i++) {
    let tech = webTechs[i];
    if (tech.length > 4) {
        newArray.push(tech);
    }
}

console.log(newArray);

// 5 ci tapsiriq   # Qiyməti 500-dən yuxarı olan məhsulları console-a yazdir

const products = [
  { id: 1, title: "Smartphone", price: 799.99, category: "Electronics" },
  { id: 2, title: "Smartwatch", price: 249.99, category: "Electronics" },
  { id: 3, title: "Laptop", price: 1299.99, category: "Computers" },
  { id: 4, title: "Gaming PC", price: 1599.99, category: "Computers" },
  { id: 5, title: "Coffee Maker", price: 99.99, category: "Home Appliances" },
  { id: 6, title: "Air Fryer", price: 149.99, category: "Home Appliances" },
  { id: 7, title: "Headphones", price: 199.99, category: "Audio" },
  { id: 8, title: "Bluetooth Speaker", price: 89.99, category: "Audio" },
  { id: 9, title: "Smart TV", price: 699.99, category: "TV & Entertainment" },
  { id: 10, title: "Projector", price: 299.99, category: "TV & Entertainment" }
];


let expensiveProducts = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 500) {
        expensiveProducts.push(products[i]);
    }
}

console.log(expensiveProducts);


//6 ci tapsiriq   # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın
let total = 0;

for (let i = 0; i < products.length; i++) {
    total += products[i].price;
}

let average = total / products.length;

console.log("Cəmi:", total);
console.log("Ortalama:", average);


// 7 ci tapsiriq   # product arrayindəki category "Computers" olan productlari ayrica bir arraya yiğ


let computersArray = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Computers") {
        computersArray.push(products[i]);
    }
}

console.log(computersArray);


/// 8 ci tapsiriq# Ən ucuz məhsulu tap


let cheapest = products[0];

for (let i = 1; i < products.length; i++) {
    if (products[i].price < cheapest.price) {
        cheapest = products[i];
    }
}

console.log("Ən ucuz:", cheapest);





