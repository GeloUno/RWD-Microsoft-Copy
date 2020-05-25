console.log('Helo');

const name1 = 'tom';
const name2 = 'janek';
const name3 = 'zenek';
const email1 = 'tom@wp.pl';
const email2 = 'janek@wp.pl';

const fullName = name1 + ' ' + name2 + ' ' + name3;

console.log(fullName);

console.log(fullName.toUpperCase());
console.log(fullName);
console.log(fullName[1]);
console.log(fullName.length);
console.log(fullName.split(' ')); // to Array
console.log(fullName.split(' ')[0]);

let emialLenght1 = email1.indexOf('@');
let emialLenght2 = email2.indexOf('@');
let emialSplite1 = email1.split('@');
let emialSplite2 = email2.split('@');

console.log(emialLenght1, emialLenght2);
console.log(emialSplite1, emialSplite2);
console.log(emialSplite1[0], emialSplite2[0]);

console.log(fullName);
let nameShift = fullName.split(' ');
console.log(nameShift);
// nameShift.shift();
nameShift.shift();
console.log(nameShift);
nameShift.push('monika', 'grazyna');
console.log(nameShift);
nameShift.pop();
console.log(nameShift);

const number = [1, 2, 3, 4];
let numberConcat = number.concat(nameShift);
console.log(numberConcat);
numberConcat.unshift(0, 6, 7);
console.log(numberConcat);
console.log(fullName);
const resultSlice = fullName.slice(2, 5);
console.log(resultSlice);
console.log(Array.isArray(nameShift));
console.log('Sub String from 2 to lenght 6: ');
resultSubstr = fullName.substr(2, 6);
console.log(resultSubstr);
console.log('Repce String from 2 to lenght 6: ');
resultRepace = fullName.replace('n', 'w');
console.log(resultRepace);

// numbers

let number1 = 11;
const number2 = 15;

let result = number1 % 3;
console.log(result);
result = number1 ** 2;
console.log(result);
let replace1 = `<h2> Lorem, ${number}ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus quas explicabo facere magni enim repellendus quisquam nihil dicta debitis! </2>`;
console.log(replace1);

let namesArray = ['marek', 'pienko', 'rysiek'];
let resultJoin = namesArray.join(',');
console.log(resultJoin);
resultJoin = namesArray.indexOf('pienko');
console.log(resultJoin);
resultJoin = namesArray.indexOf('tomek');
console.log(resultJoin);
resultJoin = namesArray.concat('ken', 'barbe');
console.log(resultJoin);
resultJoin = namesArray.push('zdzisiek');
console.log(resultJoin);
console.log(namesArray);
console.log('POP metod remove last value from array');

resultJoin = namesArray.pop();
console.log(resultJoin);
console.log(namesArray);

console.log('null + number NaN + number');
let number3;
let number4 = null;
let number5 = NaN;
console.log(number3, number3 + 4, `to jest: ${number3} wynik działania`);
console.log(number4, number4 + 4, `to jest: ${number4} wynik działania`);
console.log(number5, number5 + 4, `to jest: ${number5} wynik działania`);

console.log('true by string and boolien');
let resultEmail = email2.includes('@');
console.log('if email include @');
console.log(resultEmail);

let score = `100`;
console.log(typeof score);

console.log(score + 1);
console.log(Number(score) + 1);

// let resultScore = Number(100);
// let resultScore = Number(0);
// let resultScore = Boolean(0);
// let resultScore = Boolean(10);
let resultScore = Boolean('0');
console.log(resultScore, typeof resultScore);

// const unShift = nameShift.unshift("gerwazy","kasia");
// console.log(unShift);

const data = [10, 20, 3, 40, 5, 60, 77, 12, 10, 1, 20];

console.log(data);
const dataMap = data.map(d => d / 2);
console.log(dataMap);

data.sort((a, b) => b - a);
console.log(data);

const products = [
  {
    name: `Lodówka`,
    price: 1000
  },
  {
    name: `Telewizor`,
    price: 2500
  },
  {
    name: `Kuchenka`,
    price: 800
  },
  {
    name: `Odkurzacz`,
    price: 250
  },
  {
    name: `Zmywarka`,
    price: 2000
  },
  {
    name: `Adapter`,
    price: 100
  },
  {
    name: `Kino domowe`,
    price: 4800
  }
];

// data.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//       return -1
//   }
//   else{
//       return 0
//   }
// });
// data.reverse();
console.log(products);

products.sort((a, b) => a.price - b.price);

products.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});

const sellProduct = products.map(product => {
  if (product.price > 1500) {
    return { product: product.name, price: product.price * 0.66 };
  } else {
    return product;
  }
});
console.log(sellProduct, products);
// find first
const productsFind = products.find(product => {
  return product.price > 1000;
});

console.log(products, productsFind);

const dataToFilter = [3, 40, 60, 77];

const dataFiltering = data.filter(data => {
  return !dataToFilter.includes(data);
});
console.log(data, dataFiltering);

const dataObject = [
  {
    name: `Adam`,
    age: 23
  },
  {
    name: `Tomek`,
    age: 33
  },
  {
    name: `Marek`,
    age: 32
  }
];

const secondObject = [
  {
    name: `Krysia`,
    age: 66
  },
  {
    name: `Woldzio`,
    age: 65
  }
];

secondObject.forEach(d => {
  console.log(d.name, d.age);
  dataObject.push({ name: d.name, age: d.age, email: 'aa@aa.pl' });
});

//console.log(dataObject.concat(secondObject));

// return(d.name , d.age)

//console.log(dataFiltering);

const objectFiltering = dataObject.filter(data => {
  return data.name.includes('om');
});

dataObject.forEach((d, index) => {
  if (d.name == 'Adam') {
    dataObject[index] = { ...dataObject[index], email: `adam@aa.pl` };
  }
});

dataObject[2] = { ...dataObject[2], school: `Uniwerytet` };

console.log(dataObject);

console.log(objectFiltering);

const baseOject = [
  { key: 1 },
  { key: 3 },
  { key: 5 },
  { key: 2 },
  { key: 4 },
  { key: 8 },
  { key: 0 }
];

baseOject.push({ dog: 5 }, { dog: 4 }, { dog: 2 }, { dog: 1 }, { dog: 7 });
baseOject.push({ cat: 7 }, { cat: 5 }, { cat: 1 }, { cat: 4 }, { cat: 6 });

const sortArrayByKeyObject = (sortObject, params) => {
  sortObject = sortObject.sort((a, b) => {
    return a[params] - b[params];
  });
  return sortObject;
};

console.log(sortArrayByKeyObject(baseOject, 'dog'));
