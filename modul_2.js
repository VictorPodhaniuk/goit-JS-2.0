// МАСИВ використовується для зберігання впорядкованої колекції елементів. Він оголошується відкритою і закритою квадратною дужкою [] - літералом масиву. Всередині дужок кожен елемент масиву розділяється комою.

// Для доступу до значення елемента масиву використовується синтаксис квадратних дужок масив[індекс]. Між іменем змінної, що зберігає масив, і квадратними дужками не повинно бути пробілу.

const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length -1];
console.log(firstElement);
console.log(secondElement);
console.log(lastElement);

// На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

const fruits1 = ["apple", "plum", "pear", "orange"];

fruits1[1] = "peach";
fruits1[3] = "banana";
console.log(fruits1); 

// Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.

// Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву довільної довжини.

function getExtremeElements(array) {
  return  [array[0], array[array.length - 1]];
}



// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

function slugify(title) {
  const lowerCase = title.toLowerCase().split(' ').join('-');
    return lowerCase;
  }
  console.log(slugify("Arrays for begginers"));
  console.log(slugify("English for developer"));
  console.log(slugify("Ten secrets of JavaScript"));
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter. Якщо роздільник - це порожній рядок, отримаємо масив окремих символів. Роздільником може бути один або кілька символів.

const name1 = "Mango";
console.log(name1.split("")); // ["M", "a", "n", "g", "o"]
const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]

// Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. Тобто це зворотна операція методу рядків split(delimiter).

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'


// Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

const fruits2 = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits2.slice(0, 2);
const nonExtremeEls = fruits2.slice(1, 4);
const lastThreeEls = fruits2.slice(2);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
if (newArray.length > maxLength) {
  return newArray.slice(newArray, maxLength)
}
return newArray;
}

// Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}
  console.log(createArrayOfNumbers(1, 3))
  console.log(createArrayOfNumbers(14, 17))
  console.log(createArrayOfNumbers(29, 34))
  console.log(createArrayOfNumbers())

// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

function calculateTotal(number) {
  let sum = 0
    for (let i = 0; i <= number; i += 1) {
      sum += i;
    }
  return sum
  console.log(number)
  }
  console.log(calculateTotal(1))
  console.log(calculateTotal(3))
  console.log(calculateTotal(7))
  console.log(calculateTotal(18))
  console.log(calculateTotal(24))
  console.log(calculateTotal())

  // Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

  const fruits3 = ['apple', 'plum', 'pear', 'orange'];
for (let i = 0; i < fruits3.length; i += 1) { 
  const fruit = fruits3[i]; 
  console.log(fruit);
}

function calculateTotalPrice(order) {
  let total = 0;
for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([164, 48, 291]))
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))