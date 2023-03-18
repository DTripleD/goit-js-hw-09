const firstDelayInput = document.querySelector('[name=delay]');
const delayStepInput = document.querySelector('[name=step]');
const amountInput = document.querySelector('[name=amount]');
const createBtn = document.querySelector('button[type=submit]');
const formElement = document.querySelector('.form');

console.log(createBtn);

formElement.addEventListener('submit', createPromise);

function createPromise(event, position, delay) {
  event.preventDefault();

  let timeoutId = 0;

  for (let i = 0; i < amountInput.value; i++) {
    const delay = Number(firstDelayInput.value) + Number(delayStepInput.value) * timeoutId;
    timeoutId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        console.log('Fulfill');
        console.log(delay);
      } else {
        // Reject
        console.log('Reject');
        console.log(delay);
      }
    }, delay);
  }

}

// Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).
// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
