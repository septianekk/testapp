const API_ID = 'e87e601e';
const APP_KEY = '40c334fcad705c1708707a87558853d4';

export function fetchRecipes(food = '') {
  food = food.trim();

  return fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`,
  )
    .then(res => res.json())
    .then(({hits}) => hits.map(({recipe}) => recipe));
}
