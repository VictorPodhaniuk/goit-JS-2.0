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

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, не вдаючись до використання архаїчного циклу for...in з перевірками приналежності властивостей.

// Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

const apartment7 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values1 = [];
const keys1 = Object.keys(apartment7);
for (const key of keys) {
  values.push(apartment7[key])
}

console.log(keys1);
console.log(values1);

// Для перебирання такого масиву використовується стандартний цикл for...of. Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку», оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізняються тільки значення.

// ЗАДАЧІ

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
  const hexColors = [];
  const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getProductPrice(productName) { 
  for (product of products) {
    if (product.name === productName) {
      return product.price
    }
  }
  return null
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

const products1 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
let props = [];
  for (let product of products1) {
    if (product.hasOwnProperty(propName)) {
      props.push(product[propName])
    }
  }
  return props;
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

const products2 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  let totalPrice = 0;
  for (product of products2) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity
      return totalPrice;
    }
  }
  return 0;
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner"));


/// ДЕСТРУКТУРИЗАЦІЯ дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання менш «шумним».

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday, today, tomorrow} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(yesterday);
console.log(today);
console.log(tomorrow);
console.log(meanTemperature);

/// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі, коли в об'єкті відсутня властивість з таким ім'ям.

const highTemperatures1 = {
  yesterday1: 28,
  today1: 26,
  tomorrow1: 33,
};
const {yesterday1, today1, tomorrow1, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures1;
const meanTemperature1 = (yesterday1 + today1 + tomorrow1) / 3;

console.log(yesterday1);
console.log(today1);
console.log(tomorrow1);
console.log(meanTemperature1);
console.log(icon);

/// Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості. Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

const highTemperatures2 = {
  yesterday3: 28,
  today2: 26,
  tomorrow2: 33,
};
const {
  yesterday3: highYesterday, 
  today2: highToday, 
  tomorrow2: highTomorrow, 
  icon1: highIcon  = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures2;
const meanTemperature2 = (highYesterday + highToday + highTomorrow) / 3;

console.log(highYesterday);
console.log(highToday);
console.log(highTomorrow);
console.log(meanTemperature2);
console.log(highIcon);

/// Якщо об'єкт містить небагато властивостей, деструктуризація можна виконати безпосередньо в місці оголошення змінної book.

const colors1 = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors1 = [];
const rgbColors1 = [];
for (const {hex, rgb} of colors) {
  hexColors1.push(hex);
  rgbColors1.push(rgb);
}

console.log(hexColors1);
console.log(rgbColors1);


//// Синтаксис ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень.

const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = (Math.max(...scores));
const worstScore = (Math.min(...scores));

console.log(bestScore);
console.log(worstScore);

//// Операція spread дозволяє розподілити властивості довільної кількості об'єктів в один новий.
//// Порядок розподілу має значення. Імена властивостей об'єкта - унікальні, тому властивості об'єкта, що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
const finalSettings = {...defaultSettings, ...overrideSettings};

console.log(finalSettings);


//// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію. Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

//// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання». Всі агументи, для яких будуть оголошені параметри, передадуть їм свої значення, інші аргументи будуть поміщені в масив. Операція rest збирає решту усіх аргументів, а тому повинна бути останньою у підписі функції, інакше виникне помилка.

function addOverNum(number, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > number) {
      total += arg;
    }  
  }
  return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
