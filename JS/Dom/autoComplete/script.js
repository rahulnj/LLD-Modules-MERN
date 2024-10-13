import { getCountries } from './fetchApi.js';

const searchBox = document.getElementById('search_input');
const suggestionBox = document.getElementById('suggestion_box');

const handleSuggestions = async ({ target: { value } }) => {
  const keyword = value;
  const countryNameArr = await handleSearch(keyword);
  populateSuggestionBox(countryNameArr);
};

const handleSearch = async (keyword) => {
  try {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map(({ name: { common } }) => common);
    console.log(countryNameArr);
    return countryNameArr;
  } catch (error) {
    return [];
  }
};

const populateSuggestionBox = (countryNameArr = []) => {
  if (countryNameArr.length) {
    suggestionBox.classList.add('visible');
  } else {
    suggestionBox.classList.remove('visible');
  }

  suggestionBox.innerHTML = '';
  const fragment = document.createDocumentFragment();

  countryNameArr.forEach((countryName) => {
    const li = document.createElement('li');
    li.innerText = countryName;
    fragment.appendChild(li);
  });

  suggestionBox.appendChild(fragment);
};

searchBox.addEventListener('input', handleSuggestions);
