const InputName = document.getElementById('name');
const InputScore = document.getElementById('score');
const form = document.getElementById('form');
const InputValues = async (e) => {
  e.preventDefault();
  const obj = {
    user: InputName.value,
    score: InputScore.value,
  };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/avP3qP4IpC4Z13AEQkdM/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  form.reset();
};

export default InputValues;