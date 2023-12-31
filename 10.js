console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, який вирішується через 500мс, та повертає як успішне виконання рядок "Promise 1".
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 500);
  });

  // Створюємо проміс promise2, який вирішується через 200мс, та повертає як успішне виконання рядок "Promise 2".
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 200);
  });

  // Створюємо проміс promise3, який вирішується через 300мс, та повертає як успішне виконання рядок "Promise 3".
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 300);
  });

  // Promise.any() приймає масив промісів, які ми створили вище, і вирішується, як тільки перший із цих промісів вирішується.
  Promise.any([promise1, promise2, promise3])
    // Якщо проміс виконаний успішно, виводимо в консоль дані, які він повертає
    .then((data) => {
      console.log( data);
    })
    // Якщо проміс виконаний з помилкою, виводимо в консоль помилку
    .catch((error) => {
      console.error("Помилка при отриманні даних:", error);
    });
}

// Викликаємо функцію task10
task10();