// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsContainer = document.querySelector('ul#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});

ingredientsContainer.append(...ingredientsList);
