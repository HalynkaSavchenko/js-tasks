// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра
// age більше або дорівнює
// 18. Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//   if(age >= 18) {
//    return "You are an adult"
//     }
// }
// console.log(checkAge(17));
// console.log(checkAge(32));
// console.log(checkAge(15));



// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:
// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

// function checkStorage(available, ordered) {
//     if (ordered > available) {
//         return "Not enough goods in stock!"
//     }
//     else {
//         return "Order is processed, our manager will contact you"
//     }
// }
// console.log(checkStorage(15, 20));
// console.log(checkStorage(20, 20));
// console.log(checkStorage(25, 20));
// console.log(checkStorage(35, 36));




// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:
// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "There are no products in the order!"
//     }
//     else if (ordered > available) {
//         return "Your order is too large, there are not enough items in stock!"
//     }
//     else {
//         return "The order is accepted, our manager will contact you"
//     }
// };
// console.log(checkStorage(150, 0));
// console.log(checkStorage(150, 250));
// console.log(checkStorage(150, 5));


// ТЕРНАРНИЙ ОПЕРАТОР
// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.
// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:
// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam"
//     return password === correctPassword ? "Access granted" : "Access denied, wrong password!"
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("jque"));



// SWITCH
// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.
// Якщо значення параметра type — це рядок:
// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".
// Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             return 0;
//             break;
//         case "professional":
//             return 20;
//             break;
//         case "organization":
//             return 50;
//             break;
//         default:
//             return "Invalid subscription type!"
//     }
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("org"))


// ЛОГІЧНІ ОПЕРАТОРИ

// const screenWidth = 319;
// const sm = 320;
// const md = 768;
// const lg = 1200;
// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }




// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.
// function isNumberInRange(start, end, number) {
//     if (number >= start && number <= end) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(10, 30, 10));




// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.
// function checkAccess(subType) {
//     if (subType === "pro" || subType === "vip") {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(checkAccess("pro"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("start"));
// console.log(checkAccess("false"));




// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.
// function toggleModalVisibility(isVisible) {
//     return !isVisible
// }
// console.log(toggleModalVisibility(false));
// console.log(toggleModalVisibility(true))



// // МЕТОДИ РЯДКІВ
// SLICE()
// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

// function getSubstring(string, length) {
//     return string.slice(0, length)
// }

// const getSubstring = (string, length) => { return string.slice(0, length) }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));



// toLowerCase   toUpperCase
// Функція normalizeInput(input, to) оголошує два параметри:
// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:
// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі
// FIRST
//  function normalizeInput(input, to) {
//   if(to === "upper") {
//     return input.toUpperCase()
//   }
//   else if(to === "lower") {
//     return input.toLowerCase()
//   }
// }
// // SECOND WITH TERNAR OPERATOR
// const normalizeInput = (input, to) => {
//    return to === "upper" ? input.toUpperCase() : input.toLowerCase();
// }

// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"))




// INCLUDES()
// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.
// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.
// ////////////
// function checkForName(fullName, firstName) {
// if(fullName.toLowerCase().includes(firstName.toLowerCase())) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// ////////////
// const checkForName = (fullName, firstName) => {
//     return fullName.toLowerCase().includes(firstName.toLowerCase())
// }
// ////////////
// const checkForName = (fullName, firstName) => {
//     return fullName.toLowerCase().includes(firstName.toLowerCase()) ? "yes" : "no";
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));



// startsWith() і endsWith()
// const str = "Hello, world!";
// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

// const str = "Hello, world!";
// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

// Функція checkFileExtension(fileName, ext) приймає два параметри:
// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:
// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"
// function checkFileExtension(fileName, ext) {
//     if(fileName.endsWith(ext)) {
//         return "File extension matches"
//     }
//     else {
//         return "File extension does not match"
//     }
// }

// const checkFileExtension = (fileName, ext) => {
//     return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match"
// }
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("styles.css", ".js"));



// Метод indexOf()
// Функція getFileName(file) приймає один параметр
// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення
// function getFileName(file) {
//     if (file.indexOf(".") === -1) {
//         return file
//     }
//     else {
//         return file.slice(0, file.indexOf("."))
//     }
//  }
// const getFileName = (file) => {
//     return file.indexOf(".") !== -1 ? file.slice(0, file.indexOf(".")) : file;
// }
// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index"));




// Метод trim()
// Функція createFileName(name, ext) приймає два параметри:
// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.
// function createFileName(name, ext) {
//     return `${name.trim()}.${ext}`
// }
// const createFileName = (name, ext) => {
//     return `${name.trim()}.${ext}`
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));


// Цикли
// Цикл while (ПОКА)
// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//     let total = 0;
//     let i = 1
//     while (i <= number) {
//         total += i;
//         i++;
//     }
//     return total
//  }
// const calculateTotal = (number) => {
//     let total = 0;
//     let i = 1
//     while (i <= number) {
//         total += i;
//         i++;
//     }
//     return total
// }
// console.log(calculateTotal(3));
// console.log(calculateTotal(6));
// console.log(calculateTotal(18));




// Цикл do…while
// Цикли while і do...while працюють схожим чином, але мають одну ключову відмінність. Під час використання циклу do...while код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку.

// do {
//    statement // код, який буде виконуватися
// } while (condition);




// Цикл for
// Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//     let total = 0
//     for (let i = 0; i <= number; i++) {
//         total += i;
//     }
//     return total;
// }
// const calculateTotal = (number) => {
//     let total = 0;
//     for (let i = 0; i <= number; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log(calculateTotal(4));
// Ось рефакторинг вашого коду:
// const calculateTotal = (number) => {
//     return (number * (number + 1)) / 2;
// }
// Ви можете скористатися формулою суми арифметичної прогресії для швидкого обчислення суми чисел від 1 до n. У цьому випадку, формула (number * (number + 1)) / 2 дасть вам той самий результат, що й ваш попередній код.





// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.
// const calculateEvenTotal = (number) => {
//     let total = 0;
//     for (let i = 0; i <= number; i += 2) {
//         total += i;
//     }
//     return total;
// }
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(12));



// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.
// const start = 11;
// const end = 17;
// let number;
// for (number = start; number <= end; number ++) {
//   if (number % 5 === 0){
//       break;
//   }
// }
// console.log(number)



// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
// Доповни код функції таким чином, щоб вона:
// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break
// function findNumber(start, end, divisor) {
//     let number;
//     for (number = start; number <= end; number++) {
//         if (number % divisor === 0) {
//             return number
//         }
//     }
// }
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(16, 25, 3));




// //////////////////
// Домашнє завдання №2
// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     let totalPrice = quantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!"
//     }
//     else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`
//     }
// }

// const makeTransaction = (quantity, pricePerDroid, customerCredits) => {
//     return quantity * pricePerDroid > customerCredits ? "Insufficient funds!" : `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
// }

// console.log(makeTransaction(5, 3000, 23000));
// console.log(makeTransaction(3, 1000, 15000));
// console.log(makeTransaction(10, 5000, 8000));
// console.log(makeTransaction(8, 2000, 10000));
// console.log(makeTransaction(10, 500, 5000));


// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).
// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message
//     }
//     else {
//         return message.slice(0, maxLength) + "..."
//     }
// }

// const formatMessage = (message, maxLength) => {
//     return message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23)); /
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); /
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));



// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
// Доповни код функції таким чином, що:
// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//     return message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true



// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.
// Список країн і вартість доставки:
// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// function getShippingCost(country) {
//     let price;
//     switch (country) {
//         case "China":
//             price = 100;
//             return `Shipping to ${country} will cost ${price} credits`;
//         case "Chile":
//             price = 250;
//             return `Shipping to ${country} will cost ${price} credits`;
//         case "Australia":
//             price = 170;
//             return `Shipping to ${country} will cost ${price} credits`;
//         case "Jamaica":
//             price = 120;
//             return `Shipping to ${country} will cost ${price} credits`;
//         default:
//             return `Sorry, there is no delivery to your country`
       
//     }
// }


// Так, функцію getShippingCost можна рефакторизувати, щоб уникнути повторення коду. Один із способів це зробити - використовувати об'єкт для зберігання ціни доставки країн. Ось приклад рефакторингу:
// function getShippingCost(country) {
//   const shippingPrices = {
//     China: 100,
//     Chile: 250,
//     Australia: 170,
//     Jamaica: 120,
//   };
//   const price = shippingPrices[country];
//   if (price) {
//     return `Shipping to ${country} will cost ${price} credits`;
//   } else {
//     return "Sorry, there is no delivery to your country";
//   }
// }
// // У цьому прикладі ми використовуємо об'єкт shippingPrices, де ключами є назви країн, а значеннями - вартість доставки. Звертання до відповідного ключа допомагає нам отримувати ціну доставки для кожної країни. Якщо ціна існує, повертаємо рядок з вартістю, в іншому випадку - повідомлення про відсутність доставки.
// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"