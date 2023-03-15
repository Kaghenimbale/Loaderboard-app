import './index.css';
import getData from './modules/items.js';
import InputValues from './modules/submitData.js';

const loader = document.getElementById('preloader');
const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('form');

const loadingPage = () => {
  loader.style.display = 'none';
};

refreshBtn.addEventListener('click', getData);

form.addEventListener('submit', InputValues);

window.addEventListener('DOMContentLoaded', InputValues);
window.addEventListener('load', loadingPage);
