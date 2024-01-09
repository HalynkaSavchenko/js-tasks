function getElementWidth(content, padding, border) {
    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding);
    border = Number.parseFloat(border);
    return content + padding * 2 + border * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));



// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра
// age більше або дорівнює
// 18. Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//   if(age >= 18) {
//    return "You are an adult"
//   }
// }
// console.log(checkAge(17));
// console.log(checkAge(32));
// console.log(checkAge(15));



// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:
// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

// // function checkStorage(available, ordered) {
// //   if (available < ordered) {
// //     return "Not enough goods in stock!"
// //   }
// //   else {
// //     return "Order is processed, our manager will contact you"}
// // }
// // console.log(checkStorage(15, 20));
// // console.log(checkStorage(20, 20));
// // console.log(checkStorage(25, 20));
// // console.log(checkStorage(35, 20));




// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує
// два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:
// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".
// function checkStorage(available, ordered) {
//   if(ordered === 0) {
//     return "There are no products in the order!";
//   }
//   else if(ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   }
//   else {
//     return "The order is accepted, our manager will contact you"
//   }
// }
// console.log(checkStorage(150, 0));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(150, 250));
// console.log(checkStorage(150, 5));




// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.
// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:
// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"
// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return  password === correctPassword ? "Access granted" : "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("jque"));





// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.
// Якщо значення параметра type — це рядок:
// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".
// Використай оператор switch для розв'язання цієї задачі!
// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//       break;
//     case "professional":
//       return 20;
//       break;
//     case "organization":
//       return 50;
//       break;
//     default :
//       return "Invalid subscription type!"
//   }
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("org"))




// const screenWidth = 1201;
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
//   if (number >= start && number <=end) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(10, 30, 10));




// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.
// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip") {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(checkAccess("pro"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("start"));
// console.log(checkAccess("false"));




// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.
//  function toggleModalVisibility(isVisible) {
//   if (isVisible === !false ) {
//     return false;
//   }
//   else  {
//     return true;
//   }
// }
// console.log(toggleModalVisibility(false));
// console.log(toggleModalVisibility(true))




// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.
//     function getSubstring(string, length) {
//   return string.slice(0, length)
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));


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
// SECOND WITH TERNAR OPERATOR
// function normalizeInput(input, to) {
//   const res = to === "upper" ? input.toUpperCase():input.toLowerCase();
//   return res
// }
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"))



// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.
// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.
// function checkForName(fullName, firstName) {
//   const fullNameLowerCase = fullName.toLowerCase();
//   const firstNameLowerCase = firstName.toLowerCase();
//   if(fullNameLowerCase.includes(firstNameLowerCase)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// SECOND
// function checkForName(fullName, firstName) {
// if(fullName.toLowerCase().includes(firstName.toLowerCase())) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));



// Функція checkFileExtension(fileName, ext) приймає два параметри:
// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:
// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"
// function checkFileExtension(fileName, ext) {
//   if(fileName.endsWith(ext)) {
//     return "File extension matches";
//   }
//   else {
//     return "File extension does not match";
//   }
// }
// SECOND TERNARY OPERATOR
// function checkFileExtension(fileName, ext) {
//     const res = fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
//     return res
// }
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("styles.css", ".js"));



// Функція getFileName(file) приймає один параметр
// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення
// function getFileName(file) {
//   if(file.indexOf(".") !==-1)  {
//     return file.slice(0, file.indexOf("."))
//   }
//   else return file
// }
// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index"));



// Функція createFileName(name, ext) приймає два параметри:
// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.
// function createFileName(name, ext) {
//   return `${name.trim()}${`.${ext}`}`
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));



// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;
//   while (i <= number) {
//     total += i;
//     i ++;
//   }
//   return total;
// }
// console.log(calculateTotal(3));
// console.log(calculateTotal(6));
// console.log(calculateTotal(18));



// Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i ++ ) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(4));



// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.
// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i +=2 ) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(12));



// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.
// const start = 6;
// const end = 17;
// let number;
// for (number = start; number <= end; number ++) {
//   if (number % 5 === 0){
//     break;
//   }
// }
// console.log(number)



// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");
// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }
//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }
// const result = findNumberFromFive(10, 8);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);




// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
// Доповни код функції таким чином, щоб вона:
// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break
// function findNumber(start, end, divisor) {
//   for (let number = start; number <= end; number ++) {
//     if (number % divisor === 0) {
//       return number
//     }
//   }
// }
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(16, 25, 3));



// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).
// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));



// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
// function getSlice(array, value) {
//   if (array.indexOf(value) === -1) {
//     return [];
//   }
//   else {
//     return array.slice(0, array.indexOf(value) + 1);
//   }
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));




// Функція createArrayOfNumbers(min, max) приймає два параметра:
// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.
// function createArrayOfNumbers(min, max) {
//   const numbers = []
//   for(let i = min; i < max; i+=1) {
//     numbers.push(i)
//   }
//   return numbers
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(1, 8));
// console.log(createArrayOfNumbers(5, 10));


// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
// function calculateTotalPrice(order) {
//   let total = 0;
//   for(let i = 0; i < order.length; i++) {
//     total += order[i];}
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));



// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.
// function getEvenNumbers(start, end) {
//   const numbers = [];
//   for(let i = start; i <= end; i++) {
//     if(i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));




// Функція checkStorage(storage, item) приймає два параметри:
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].
// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));




// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// Доповни код функції:
// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// // Поверни наповнений масив спільних елементів як результат роботи функції.
// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for(let i = 0; i < array1.length; i++) {
//     if(array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements(["a", "b", "c"], ["b", "c", "d"]));




// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const number of order) {
//     total += number
//   }
//   return total
// }
// console.log(calculateTotalPrice([164, 48, 291]));




// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
// // function createReversedArray() {
// //   const newArray = Array.from(arguments);
// //   return newArray.toReversed();
// // }
// SECOND
// function createReversedArray() {
//   return Array.from(arguments).toReversed();
// }
// console.log(createReversedArray(12, 85, 37, 4));




// Функція calculateTax(amount, taxRate) оголошує два параметри:
// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(100));

// ОБ'ЄКТИ
// Об'єкт apartment описує квартиру і має 5 властивостей: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptRating);
// console.log(aptTags);



// Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник. Властивість owner (власник) також є об'єктом. Оголошено шість змінніх, значення яких це значення відповідних властивостей об'єкту apartment.
// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];


// Доповни код, оновивши значення властивостей об'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");


// Додай об'єкту apartment кілька нових властивостей:
// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// Зверніть увагу: якщо ви спробуєте додати властивості country і city до ще не створеної властивості location, ви отримаєте помилку.Спочатку ініціалізуйте location як порожній об'єкт, а потім додавайте до нього властивості.
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.
// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив["on sale", "trending", "best buy"]
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };



// Використовуючи синтаксис обчислювальних властивостей, доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, ключі яких зберігаються у змінних emailInputName і passwordInputName.
// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam"
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };


// FOR...IN
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key])
// }

// Object.keys()
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);
// for (const key of keys) {
//   console.log(key); // Ключ (звернення до масиву)
//   console.log(book[key]); // Значення властивості (звернення до обєкту)
// }

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key]);
// }


// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей.Функція має повернути кількість властивостей в об'єкті object.
// function countProps(object) {
//   const keys = Object.keys(object)

//   return keys.length;
// }



// Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);



// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const arrSalaries = Object.values(salaries);
//   for (let i = 0; i < arrSalaries.length; i++) {
//     totalSalary += arrSalaries[i];
//   }
//   return totalSalary
// }


// Масив об’єктів
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   }
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }


// Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
  
// }



// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// for (let product of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }
//     return null

// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Engine"));



// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const keys = Object.keys(products[0]);
//   const productName = [];
//   for (let product of products) {
//     for (let key of keys) {
//       if (key === propName) {
//         productName.push(product[key]);
//       }
//     }
//   }
//   return productName;
// }

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const keysValue = [];
//   for (let product of products) {
//     if (propName in product) {
//       keysValue.push(product[propName]);
//     }
//   }
//   return keysValue;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));



// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!", де < productName > — це ім'я товару.
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let totalPrice = 0;
//   for (let product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   if (totalPrice === 0) {
//     return `Product ${productName} not found!`;
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));


// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.
// Оголоси об'єкт atTheOldToad з наступними властивостями:
// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName
// const atTheOldToad = {
//   potions: [],
//    getPotions() {
//     return "List of all available potions"
//    },
//   addPotion(potionName) {
//     return `Adding ${potionName}`
//   },
// }
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"))

// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());



// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName)
//   },
// };
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion("Invisibility")
// console.log(atTheOldToad.getPotions());




// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.
// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price
//     }
//     return totalPrice
//   },
// };
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());


// Об'єкт atTheOldToad має наступні властивості:
// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName("Speed potion", "Polymorth")
// console.log(atTheOldToad.getPotions());



// // Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.
// function add(...args) {
//   let total = 0;
  
//   for (let num of args) {
//     total += num;
    
//   }
//   return total;
// }
// console.log(add(1, 2, 3));


// Функція addOverNum() приймає довільну кількість аргументів чисел.
// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.
// function addOverNum(value, ...args) {
//   let total = 0;
//   for (let num of args) {
//     if(num > value) {
//       total += num;
//     }
    
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.
// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().
// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//     const worst = Math.min(...scores);
//     let extremeScores = {}
//   return extremeScores = {
//     best,
//     worst,
//   }
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));


// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розпилення, доповни код таким чином, щоб:
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, користувацькі налаштування зберігаються у змінній overrideSettings.
// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені користувацькі налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {
//   ...defaultSettings, ...overrideSettings,
// };
// console.log(finalSettings);


// Колбек-функції
// Функція makePizza повертає рядок з повідомленням клієнту.
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(makePizza());
// console.log(makePizza);



// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));



// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.
// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
  
// });
// console.log(makePizza("Ultracheese"));????????????????



// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function(item) {
    
//     totalPrice+=item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// function filterArray(numbers, value) {
//   let newNumbers =[];
//   numbers.forEach(function(number){
//     if(number>value){
//       newNumbers.push(number);
//     }
//   });
//   return newNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// Стрілочні функції
// //  Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }

// явне повернення(explicit return)
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// неявне повернення(implicit return)
// const add = (a, b, c) => a + b + c;

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;



// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Також заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice+=item;
//   })
//   return totalPrice
// }

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if(number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }



// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// const changeEven = (numbers, value) => {
//   const newNumbers = [];
//   numbers.forEach((number) => {
//     if(number % 2 === 0) {
//       newNumbers.push(number + value);
//     }
//     else {
//       newNumbers.push(number);
//     }
//   })
//   return newNumbers;
// }


// В масиві planets зберігаються назви планет. Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets. Обов'язково використовуй метод map().
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(boo => boo.title);
// console.log(titles);



// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];



// Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, значенням якої є масив жанрів. Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів усіх книг (властивість genres) з масиву books.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// const genres = books.flatMap(book => book.genres);
// console.log(genres);



// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);



// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);



// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);



// Доповни стрілочну функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням другого параметра color.
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням другого параметра email.
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність хоча б одного активного користувача (властивість isActive) і повертала true або false.
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// const getUserEmails = (users) => {
//   return users.map(user => user.email)
// };
// console.log(getUserEmails(users));

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, "blue"));
    
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// };
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));

//  const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive === true)
// };
// console.log(isEveryUserActive(users));

// const isAnyUserActive = (users) => {
//   return users.some(user => user.isActive === true)
// };
// console.log(isAnyUserActive(users));

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user)=> {
//     return total + user.balance
//   }, 0)
// };
// console.log(calculateTotalBalance(users));



// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number)=> {
//   return previousValue + number
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);



// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player)=> {
//  return total + (player.playtime/player.gamesPlayed)
// }, 0);
// console.log(totalAveragePlaytimePerGame);



// Змінна releaseDates - це масив чисел, років видання книг. Змінна authors - це масив рядків, авторів книг.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом. Використовуй метод toSorted()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// const ascendingReleaseDates = releaseDates.toSorted();
// const alphabeticalAuthors = authors.toSorted();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);


// Змінна releaseDates - це масив чисел, років видання книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані за датою видання, за їх зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


// Змінна authors - це масив рядків, авторів книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані за автором в алфавітному і в зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));



// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];
// const sortedByAuthorName = books.toSorted((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.Використовуй ланцюжок методів.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood",
//    author: "Tanith Lee",
//    rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .toSorted((a, b) => a.localeCompare(b));

// console.log(names);


// Звичайно! Ось кілька задачок на перебираючі методи масивів:

// Знайти найбільше число у масиві чисел.

// const numbers = [4, 2, 9, 5, 1];
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber); // Виводиться 9
// Подвоїти кожен елемент масиву чисел.

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers); // Виводиться [2, 4, 6, 8, 10]
// Відфільтрувати слова з масиву рядків, які починаються з певної літери.

// const words = ["apple", "banana", "orange", "grape"];
// const filteredWords = words.filter(word => word.startsWith("b"));
// console.log(filteredWords); // Виводиться ["banana"]
// Об'єднати всі елементи масиву рядків у одну рядок, розділені комою.

// const words = ["Hello", "world", "!"];
// const mergedString = words.join(", ");
// console.log(mergedString); // Виводиться "Hello, world, !"
// Перевірити, чи всі елементи масиву є числами.

// const values = [1, 2, "three", 4, 5];
// const allNumbers = values.every(value => typeof value === "number");
// console.log(allNumbers); // Виводиться false

// Завдання: Знайти суму всіх чисел в масиві.
// const numbers = [2, 4, 6, 8, 10];
// const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

// console.log(sum); // 30
// Завдання: Знайти середнє арифметичне всіх чисел у масиві.
// const numbers = [10, 20, 30, 40, 50];
// const average = numbers.reduce((accumulator, currentNumber, index, array) => {
//     accumulator += currentNumber;
//     if (index === array.length - 1) {
//         return accumulator / array.length;
//     } else {
//         return accumulator;
//     }
// }, 0);

// console.log(average); // 30
// Завдання: Фільтрувати елементи масиву, залишаючи тільки непарні числа.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(oddNumbers); // [1, 3, 5, 7, 9]
// Завдання: Перетворити кожен елемент масиву в його квадрат.
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(number => number * number);

// console.log(squaredNumbers); // [1, 4, 9, 16, 25]