// 1

// function checkAge(age) {
//   if (age >= 18) {
//     console.log("You are an adult");
//     return;
//   }
//   console.log("You are a minor");
//   return;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);



// 2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  
//   // Change code below this line

//     if (password === ADMIN_PASSWORD) {
//       console.log("Welcome!");
//     return;
//     } 
//     console.log("Access denied, wrong password!");
//     return;
//   }

//   checkPassword("mangohackzor");
//   checkPassword("polyhax");
//   checkPassword("jqueryismyjam");


// 3

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     console.log(available, ordered, "Your order is empty!");
//     return;
//   } 
//   if (ordered > available) {
//     console.log(available, ordered, "Your order is too large, not enough goods in stock!");
//     return ;
//   } 
//   console.log(available, ordered, "The order is accepted, our manager will contact you");
//   return;
//   }

//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(70, 0);
//   checkStorage(200, 20);
//   checkStorage(200, 250);
//   checkStorage(150, 0);


// 4
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);


// 5
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(fruits);
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// 6
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);


// 7
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);


// 8
// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// 9
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line
// const firstElement = array[0];
// const lastElement = array[array.length - 1];
// const newArray = [firstElement, lastElement];
// console.log(newArray);
// return [newArray];

// console.log([array[0], array[array.length - 1]]);
// return ([array[0], array[array.length - 1]]);

  // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);


// 10
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   console.log(words);
//   return words;
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");


// 11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const messageArr = message.split(' ')
//   console.log(messageArr.length * pricePerWord); 

//   return messageArr.length * pricePerWord
//   // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// 12
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);

//   console.log(string);

//   // Change code above this line
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");


// 13
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line
//   let titleSlug;
//   titleSlug = title.toLowerCase().split(' ').join('-');
//   console.log(title, titleSlug);

//   return titleSlug;

//   // Change code above this line
// }

// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");


// 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// console.log(fruits);
// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1,fruits.length-1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);


// 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);


// 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   const array = firstArray.concat(secondArray);
//   const arrLength = array.length;
//   // console.log(arrLength);
//   if (arrLength > maxLength) {
//     console.log(array.slice(0,maxLength));
//     return array.slice(0,maxLength);
//   }
//   console.log(array);
//   return array
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);


// 17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
 
//   console.log(total);
//   return total;
//    // Change code above this line
//  }

//  calculateTotal(1);
//  calculateTotal(3);
//  calculateTotal(7);
//  calculateTotal(18);
//  calculateTotal(24);


// 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// 21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   console.log(words);
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   console.log(longestWord);
//   return longestWord;
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");


// 22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


// 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//   const newNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newNumbers.push(number)
//     }
//   }

//   console.log(newNumbers);
//   return newNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// 24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");


// 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   const arrCommonElements = [];

//   for (const element of array1) {
//     if(array2.includes(element)) {
//       arrCommonElements.push(element);
//     }
//   }

//   console.log(arrCommonElements);
//   return arrCommonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


// 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order) {
//     total += element;
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);


// 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// 28
// Объявлена переменная a
// Значение переменной a это число 0
// Объявлена переменная b
// Значение переменной b это число 1
// Объявлена переменная c
// Значение переменной c это число 3
// Объявлена переменная d
// Значение переменной d это число 5
// Объявлена переменная e
// Значение переменной e это число 2

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a, b, c, d, e);


// 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i)
//     }
//   }

//   console.log(evenNumbers);
//   return evenNumbers;
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);


// 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);


// 31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       console.log(i);
//       return i;
//     }
//   }
//   // Change code above this line
// }

// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);


// 32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
  
//   for (const item of array) {
//     if (item === value) {
//       console.log(true);
//       return true;
//     }
//   }
//   console.log(false);
//   return false;
// }

// includes([1, 2, 3, 4, 5], 3); 
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");