// ЗМІННІ використовуються для зберігання даних. У кожної змінної є ідентифікатор (назва змінної). Значення кожної змінної зберігається в оперативній пам'яті.

const productName = "Droid";
console.log(productName);
const pricePerItem = 2000;
console.log(pricePerItem);

// Створення змінної без ключового слова let або const призведе до помилки.

let productName1 = "Droid";
let pricePerItem1 = 2000;

productName1 = "Repair droid";
pricePerItem1 += 1500;
console.log(productName1, pricePerItem1);



// ФУНКЦІЯ - це підпрограма, незалежна частина коду, призначена для багаторазового виконання конкретної задачі з різними початковими значеннями.
// Оголошення функції починається з ключового слова function, за яким йде її ім'я — дієслово, що відповідає на питання «Що зробити?» і пара круглих дужок. Тіло функції береться у фігурні дужки {} і містить інструкції, які необхідно виконати під час її виклику. Потім, коли необхідно, функція викликається за допомогою імені та пари круглих дужок.

function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();

// ПАРАМЕТРИ - це локальні змінні, доступні тільки у тілі функції. Вони розділяються комами.

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);



// Оператор return використовується для передачі значення з тіла функції у зовнішній код.
// Коли інтерпретатор зустрічає return, він відразу ж виходить з функції (припиняє її виконання), і повертає вказане значення у те місце коду, де функція була викликана.

function add(a, b, c) {
  return a + b + c;
}
add(2, 5, 8);
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// У функції може бути більше одного оператора return. Головне пам'ятати, що виконання функції переривається, коли інтерпретатор зустрічає повернення, і весь код після нього буде проігнорований в поточному виклику функції.

function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}



// РОЗГАЛУЖЕННЯ використовуються для виконання різноманітного коду, залежно від умови. Принцип роботи простий - результат умови приводиться до буля true або false, після чого потік програми спрямовується в ту або іншу гілку.

// Конструкція if...else може перевірити і зреагувати на виконання або невиконання тільки однієї умови.

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}

// Блок else...if дозволяє додати після else ще один оператор if з умовою. В кінці ланцюжка може бути класичний блок else, який виконається тільки у разі, коли жодна з умов не приведеться до true.

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}



// Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до false, і правий - в інших випадках.
// Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до true, і правий - в інших випадках.
// Всі оператори, які ми розглядали до цього, були бінарними. Тобто вони містили два операнди: лівий і правий. Логічне «НЕ» - це унарний оператор, що виконує операцію над одним операндом справа.
//Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - замінює його на протилежний true -> false або false -> true.

// ТЕРНАРНИЙ ОПЕРАТОР використовується як синтаксично коротша заміна інструкції if...else, коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.
// <умова> ? <вираз, якщо умова істинна> : <вираз, якщо умова хибна>
// Обчислюється умова.
// - Якщо умова істинна, тобто приводиться до true, обчислюється вираз після ?.
// - Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
// - Значення обчисленого виразу повертається як результат роботи тернарного оператора.

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";
  return message;
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));



// У деяких випадках незручність читання складних розгалужень if...else можна уникнути, використовуючи «плоскіший» синтаксис інструкції розгалуження switch.
// Сфера застосування switch обмежена задачами з одним загальним питанням (що порівнювати) і безліччю варіантів відповідей (з чим порівнювати).

function getSubscriptionPrice(type) {
  let price;
  type === "starter";

  switch (type) {
    case "starter":
      price = 0;
      break;

    case "professional":
      price = 20;
      break;

    case "organization":
      price = 50;
      break;
  }
  return price;
}
console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));

// Для того щоб дізнатися довжину рядка, тобто кількість її символів, у рядків є вбудована властивість length, значення якої можна отримати, звернувшись до неї через крапку після імені змінної або рядкового літерала.

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}



// РЯДОК — це індексований набір з нуля або більше символів, взятих в одинарні, подвійні або скісні лапки.
// Індексація елементів рядка починається з нуля. Наприклад, в рядку 'JavaScript' літера 'J' стоїть на позиції з індексом 0, а 't' - під індексом 9. При цьому довжина рядка 'JavaScript' дорівнює 10, тобто індекс останнього елемента завжди на одиницю менший його довжини.

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

// Вміст рядка не можна змінити, лише прочитати. Тобто не можна взяти якийсь символ і замінити його, щойно рядок створений - він такий назавжди. Можна лише створити повністю новий рядок і присвоїти у змінну, замість старого.

// Метод рядків slice(startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex, і повертає новий рядок.
function getSubstring(string, length) {
  const substring = string.slice(string, length); // Change this line
  return substring;
}
console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));

// Метод рядків includes(substring) перевіряє, чи входить підрядок substring у рядок, повертає буль - true, якщо входить, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад літера "a" не дорівнює літері "А".

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}
console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor"));
console.log(checkForName("Egor Kolbasov", "egOr"));
console.log(checkForName("Egor Kolbasov", "Zhenya"));
console.log(checkForName("Vadim Nekrasov", "Vadim"));
console.log(checkForName("Vadim Nekrasov", "vadim"));
console.log(checkForName("Vadim Nekrasov", "Dima"));
