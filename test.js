const num1 = Number(prompt("Введите первое число:"));
const num2 = Number(prompt("Введите второе число:"));

// Получаем операцию
const operation = prompt("Выберите операцию (+, -, *, /):");

let result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "Ошибка: деление на 0!";
  }
} else {
  result = "Ошибка: неизвестная операция!";
}

// Выводим результат
alert("Результат: " + result);