import getData from './items.js';

const InputName = document.getElementById('name');
const InputScore = document.getElementById('score');
const form = document.getElementById('form');

const InputValues = async (e) => {
  e.preventDefault();
  const obj = {
    user: InputName.value,
    score: InputScore.value,
  };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N5XTdR3bpM3UOow3Fpmx/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  getData();
  form.reset();
};

export default InputValues;