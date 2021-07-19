// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в
// список ul.ingredients.
// Для создания DOM - узлов используй document.createElement()


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createLi = ingredients.map(item => {
  const li = document.createElement(`li`);
  li.textContent = item;
  return li;
});

const ulLi = document.querySelector(`#ingredients`);
ulLi.append(...createLi);

console.log(ulLi);


// const ulElem = document.querySelector('#ingredients');

// const ingredList = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, '');

// ulElem.innerHTML = ingredList;

// console.log(ingredList);
