import Notiflix from 'notiflix';

const formElement = document.querySelector('.form');

formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;

  if (delay.value <= 0 || step.value <= 0 || amount.value <= 0) {
    return Notiflix.Notify.warning('Enter a number greater than 0');
  }

  for (let i = 0; i < amount.value; i += 1) {
    const positionCounter = i + 1;

    const delays = Number(delay.value) + step.value * i;

    createPromise(positionCounter, delays)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
