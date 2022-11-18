const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const vegetables = document.querySelector('#ingredients');

const elements = ingredients.map((options, index) => {
    const liElem = document.createElement('li');
  liElem.textContent = ingredients[index];
  liElem.classList.add('item');

  return (liElem);
});

console.log(elements);
vegetables.append(...elements);
