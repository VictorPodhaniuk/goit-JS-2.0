// Об'єкти дозволяють описати і згрупувати характеристики об'єктів реального світу - користувача, книги, продукту магазину, чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
console.log(apartment.imgUrl);
console.log(apartment.descr);
console.log(apartment.rating);
console.log(apartment.price);
console.log(apartment.tags);

// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ключ_властивості. Здебільшого використовується синтаксис «через крапку» і підходить тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// - На місце звернення буде повернуте значення властивості з таким ім'ям.
// - Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

const apartment1 = {
  imgUrl1: "https://via.placeholder.com/640x480",
  descr1: "Spacious apartment in the city center",
  rating1: 4,
  price1: 2153,
  tags1: ["premium", "promoted", "top"],
};
const aptRating = apartment1.rating1;
const aptDescr = apartment1.descr1;
const aptPrice = apartment1.price1;
const aptTags = apartment1.tags1;

console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags);

// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».

// Якщо значення властивості - це масив, то у нашому прикладі user.hobbies - звернення до цього масиву. Далі можна отримати доступ до його елементів через квадратні дужки та індекс або використовувати властивості і методи.

const apartment2 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const ownerName = apartment2.owner.name;
const ownerPhone = apartment2.owner.phone;
const ownerEmail = apartment2.owner.email;
const numberOfTags = apartment2.tags.length;
const firstTag = apartment2.tags[0];
const lastTag = apartment2.tags[2];

console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);

// Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ключ_властивості"]. Схоже на звернення до елемента масиву з відмінністю в тому, що в дужках зазначається не індекс елемента, а ім'я властивості як рядок.

const apartment3 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
const aptRating1 = apartment3["rating"];
const aptDescr1 = apartment3["descr"];
const aptPrice1 = apartment3["price"];
const aptTags1 = apartment3["tags"];
console.log(aptRating1);
console.log(aptDescr1);
console.log(aptPrice1);
console.log(aptTags1);

// Після того як об'єкт створений, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

const apartment4 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment4.price = 5000;
apartment4.rating = 4.7;
apartment4.owner.name = "Henry Sibola";
apartment4.tags.push("trusted");

console.log(apartment4);


// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості. Якщо під час запису значення за ім'ям, така властивість відсутня в об'єкті, вона буде створена.

const apartment5 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment5.area = 60;
apartment5.rooms = 3;
apartment5.location = {
  country: "Jamaica",
  city: "Kingston",
}

console.log(apartment5);

// Синтаксис обчислюваних властивостей (computed properties) допомагає уникнути зайвого коду і, в деяких випадках, спростити його. Значенням обчислюваної властивості може бути будь-який валідний вираз.

const emailInputName = "email";
const passwordInputName = "password";
const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

console.log(credentials);

// На відміну від масиву або рядка, об'єкт - це НЕ інтерабельна сутність, тобто його не можна перебрати циклами for або for...of. Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

const apartment6 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (const key in apartment6) {
  keys.push(key)
  values.push(apartment6[key])
}
console.log(keys);
console.log(values);