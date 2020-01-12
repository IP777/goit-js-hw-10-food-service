import './styles.css';
import menuTepmlate from './template/menu.hbs';
import dataItem from './data/menu.json';

const refs = {
  postFeed: document.querySelector('.js-menu'),
  chbox: document.querySelector('.js-switch-input'),
  bodyTag: document.body,
};

//-------------------------------
buildPostFeed(dataItem);

function buildPostFeed(posts) {
  const markup = posts.map(post => menuTepmlate(post)).join('');

  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}

//-------------------------------
//refs.chbox.checked = false;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.bodyTag.className = localStorage.getItem('theme');

function hendlerFunc() {
  if (this.checked) {
    changeTheme(Theme.DARK);
  } else {
    changeTheme(Theme.LIGHT);
  }
}

function changeTheme(theme) {
  refs.bodyTag.className = theme;
  localStorage.setItem('theme', theme);
}

refs.chbox.addEventListener('change', hendlerFunc);

//-------------------------------
