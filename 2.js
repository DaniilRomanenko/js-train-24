console.log("Завдання: 2 ==============================");

// Створюємо функцію task2
function task2() {
  // Створюємо функцію promise1
  function promise1() {
    // Повертаємо новий проміс
    return new Promise((resolve, reject) => {
      // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 2 секунди.
      setTimeout(() => {
        // Після 2 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 1 виконано"
        resolve("Проміс 1 виконано");
      }, 2000);
    });
  }

  // Створюємо функцію promise2
  function promise2() {
    // Повертаємо новий проміс
    return new Promise((resolve, reject) => {
      // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 5 секунди.
      setTimeout(() => {
        // Після 5 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 2 виконано"
        resolve("Проміс 2 виконано");
      }, 5000);
    });
  }

  // Використовуємо Promise.race для визначення, який проміс виконується першим.
  Promise.race([promise1(), promise2()])
    .then((result) => {
      // У разі успіху виводимо результат
      console.log("Результат:", result);
    })
    .catch((error) => {
      // У разі помилки виводимо повідомлення про помилку
      console.error("Помилка:", error.message);
    })
    .finally(() => {
      // Незалежно від результату, виводимо повідомлення про завершення обробки промісів, який є рядом "Завдання 2 завершено"
      console.log("Завдання 2 завершено");
    });
}

// Викликаємо функцію task2
task2();