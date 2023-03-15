const ul = document.getElementById('items');

const getData = async () => {
  ul.innerHTML = '';
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/avP3qP4IpC4Z13AEQkdM/scores');
  const data = await response.json();
  data.result.forEach((element) => {
    const li = document.createElement('li');
    li.className = 'itemScore';
    li.innerHTML = `
    <h3>${element.user} :</h3>
    <p>${element.score}</p>
    `;
    ul.appendChild(li);
  });
};

export default getData;
