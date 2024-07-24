// munculkan menu toogle humberg3er
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

// muncul search box
const searchBox = document.querySelector("#search-box");
const search = document.querySelector("#search");

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  searchBox.classList.add('hidden');
});

search.addEventListener('click', () => {
  searchBox.classList.toggle('hidden');
  menu.classList.add('hidden');
});