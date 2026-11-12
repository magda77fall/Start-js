// 1

let title = "Magda-project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 666;
let rollback = 15;
let fullPrice = 50000;
let adaptive = true;

// 2

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

let a = fullPrice * (rollback / 100);

console.log(
  "Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани",
);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани",
);

console.log(screens.toLowerCase().split(", "));
console.log("Процент посреднику: " + a + " рублей/долларов/гривен/юани");

// lesson № 3

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = +prompt("Сколько будет стоить данная работа?");
adaptive = prompt("Нужен адаптив на сайте?", "Да");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - Math.ceil(a);

console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}
