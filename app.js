//Array1.
//n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.

/*et n = 5;
let sum = 0;
let arr = [];
for (i = 0; i <= n; i++) {

}
console.log(sum); */

//Array2.
//n natural soni va X, Y butun sonlari berilgan (n > 2).
//a[0] = X, a[1] = Y.
//Qolgan elementlari esa o‘zidan oldingi ikki element yig‘indisiga teng bo‘lgan massivni hosil qiling va chiqarib bering.

let n = 6;
const arr = [1, 2];
let X = 1;
let Y = 2;
let sum = X + Y;

for (i = 0; i < n - 2; i++) {
  arr.push(sum);
  sum = sum + sum;
}
console.log(arr);

/*Array3.
n ta elementdan tashkil topgan massiv berilgan.
Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.

let arr = [4, 5, 7, 8, 6, 9];
let even = [];
arr.findIndex((item, index) => {
  if (index % 2 == 1) {
    even.push(item);
  }
});
console.log(even.reverse());*/

/*Array 4
n ta elementdan tashkil topgan massiv berilgan.
Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.

let arr = [10, 5, 3, 8, 1, 6, 9];
let sum = 0;
const big = arr.findIndex((num) => {
  return num == 10;
});
const small = arr.findIndex((num) => {
  return num == 1;
});
console.log(small + big);*/

/*Array5.
n ta elementdan tashkil topgan massiv berilgan.
Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.

let arr = [4, 5, 7, 8, 6, 9];
let even = [];
let odd = [];
arr.findIndex((item, index) => {
  if (index % 2 == 0) {
    even.push(item);
  }
});
arr.findIndex((item, index) => {
  if (index % 2 == 1) {
    odd.push(item);
  }
});
console.log(even);
console.log(odd);*/

/*Array7.
n ta elementdan tashkil topgan massiv va R butun soni berilgan.
Massiv elementlari orasidan R soniga eng uzoq son topilsin.

let arr = [10, 15, 2, 30, 18];
let R = 12;
const result = arr.find((x) => {
  return x >= 20;
});
console.log(result);*/

/* Array8.
n ta elementdan tashkil topgan massiv berilgan.
Massivni ikkiga ajrating:
Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.

let arr = [7, 3, 9, 1, 8, 2, 4];

const bigNumbers = arr.filter((item) => {
  return item > 5;
});
console.log(bigNumbers);

const smallNumbers = arr.filter((item) => {
  return item < 5;
});
console.log(smallNumbers); */

//Array9.
//n ta elementdan tashkil topgan massiv berilgan.
//Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.

/*let arr = [1, 2, 3, 4];
const result = [];
arr.forEach((item) => {
  if (!result.includes(item)) {
    result.push(item);
  }
  return result;
});
console.log(result);*/
