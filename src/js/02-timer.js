import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysText = document.querySelector('span[data-days]');
const hoursText = document.querySelector('span[data-hours]');
const minutesText = document.querySelector('span[data-minutes]');
const secondsText = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      alert('Please choose a date in the future');
    }

    startBtn.addEventListener('click', () => {
      const intervalId = setInterval(() => {
        const currentDate = new Date();
        const timeRemain = selectedDate - currentDate;

        if (timeRemain !== '') {
          startBtn.setAttribute('disabled', '');
        }

        const convertedMs = convertMs(timeRemain);

        changeText(convertedMs);

        if (timeRemain <= 999) {
          clearInterval(intervalId);
          startBtn.removeAttribute('disabled', '');
        }
      }, 1000);
    });
  },
};

flatpickr(input, options);

function convertMs(time) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(time / day));
  const hours = addLeadingZero(Math.floor((time % day) / hour));
  const minutes = addLeadingZero(Math.floor(((time % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((time % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function changeText({ days, hours, minutes, seconds }) {
  daysText.textContent = days;
  hoursText.textContent = hours;
  minutesText.textContent = minutes;
  secondsText.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// startBtn.setAttribute('disabled', '');

// startBtn.removeAttribute('disabled', '');

// variant with event listener not on onClose

// startBtn.addEventListener('click', () => {
//   const date = new Date(input.value);

//   const intervalId = setInterval(() => {
//     const currentDate = new Date();
//     const timeRemain = date - currentDate;

//     console.log(timeRemain);

//     if(timeRemain !== ""){
//         startBtn.setAttribute('disabled', '');
//     }

//     const convertedMs = convertMs(timeRemain);

//     changeText(convertedMs);

//     if (timeRemain <= 999) {
//         clearInterval(intervalId);
//         startBtn.removeAttribute('disabled', '');
//       }
//     }, 1000);
// });
