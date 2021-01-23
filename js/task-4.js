/* Счетчик состоит из спана и кнопок, которые должны увеличивать и 
уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение 
счетчика.
Создай функции increment и decrement для увеличения и 
уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

let counterValue = 0;
const counterRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

const increment = function () { 
  counterValue += 1;
  counterRef.textContent = counterValue;
}

const decrement = function () { 
  counterValue -= 1;
  counterRef.textContent = counterValue;
}

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);