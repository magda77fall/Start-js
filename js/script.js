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
