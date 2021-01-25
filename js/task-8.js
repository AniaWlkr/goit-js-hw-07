/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 
1 параметр amount - число. Функция создает столько div, 
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше 
предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const inputRef = document.querySelector('#controls>input');
const createCollection = document.querySelector('button[data-action="render"]');
const destroyCollection = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

function createBoxes(amount) { 
  if (boxesRef.children.length > 0) { 
    destroyBoxes(); 
  }
  let size = 30;
  for (let i = 0; i < amount; i += 1) { 
    const divElement = document.createElement('div');
    divElement.setAttribute('style', `background-color: ${random_bg_color()}; width: ${size}px; height: ${size}px`);
    boxesRef.append(divElement);
    size += 10;
  }
};

function destroyBoxes() { 
  boxesRef.innerHTML = '';
  inputRef.value = '';
}

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};

createCollection.addEventListener('click', () => {
  const divQty = Number(inputRef.value);
  divQty ? createBoxes(divQty) : alert('Enter valid value');
}
);

destroyCollection.addEventListener('click', destroyBoxes);
