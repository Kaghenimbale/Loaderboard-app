import './index.css';
import getData from './modules/items.js';
import InputValues from './modules/submitData.js';

const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('form');

refreshBtn.addEventListener('click', getData);

form.addEventListener('submit', InputValues);
