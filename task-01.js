const sumCategories = document.querySelectorAll('.item');
console.log('Number of categories:' + " " + sumCategories.length);


const firstCat = sumCategories[0].firstElementChild;
console.log('Category:',  firstCat.textContent);

const firstCatUl = sumCategories[0].lastElementChild;
const firstChildren = firstCatUl.children;
console.log('Elements:', firstChildren.length);

const secCat = sumCategories[1].firstElementChild;
console.log('Category:',  secCat.textContent);

const secCatUl = sumCategories[1].lastElementChild;
const secChildren = secCatUl.children;
console.log('Elements:', secChildren.length);

const thirdCat = sumCategories[2].firstElementChild;
console.log('Category:',  thirdCat.textContent);

const thirdCatUl = sumCategories[2].lastElementChild;
const thiChildren = thirdCatUl.children;
console.log('Elements:', thiChildren.length);