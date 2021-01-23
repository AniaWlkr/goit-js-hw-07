/* Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}
#validation-input.valid {
  border-color: #4caf50;
}
#validation-input.invalid {
  border-color: #f44336;
}
 */

const inputRef = document.querySelector('#validation-input');
const dataLength = Number(inputRef.getAttribute('data-length'));

const inputValidation = function (strLength) { 
  // console.log(strLength);
  // console.log(dataLength);
  if (strLength === dataLength) {
    // console.log('valid');
    if (inputRef.classList.contains('invalid')) { 
      // console.log('remove invalid');
      inputRef.classList.remove('invalid');
    }
    // console.log('add valid');
    inputRef.classList.toggle('valid');
  }
  else {
    // console.log('invalid');
    if (inputRef.classList.contains('valid')) { 
      // console.log('remove valid');
      inputRef.classList.remove('valid');
    }
    //  console.log('add invalid');
    inputRef.classList.toggle('invalid');
  }
}
inputRef.addEventListener('change', event => inputValidation(event.target.value.length));