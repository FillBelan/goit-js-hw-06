// const sumCategories = document.querySelectorAll('.item');
// console.log('Number of categories:' + " " + sumCategories.length);
// console.log(sumCategories);

// const newCategory = document.querySelector('#categories');
// console.log(newCategory);
// // const firstCat = sumCategories[0].firstElementChild;
// // console.log('Category:',  firstCat.textContent);

// // const firstCatUl = sumCategories[0].lastElementChild;
// // const firstChildren = firstCatUl.children;
// // console.log('Elements:', firstChildren.length);

// // const secCat = sumCategories[1].firstElementChild;
// // console.log('Category:',  secCat.textContent);

// // const secCatUl = sumCategories[1].lastElementChild;
// // const secChildren = secCatUl.children;
// // console.log('Elements:', secChildren.length);

// // const thirdCat = sumCategories[2].firstElementChild;
// // console.log('Category:',  thirdCat.textContent);

// // const thirdCatUl = sumCategories[2].lastElementChild;
// // const thiChildren = thirdCatUl.children;
// // console.log('Elements:', thiChildren.length);

// const eachCategory = sumCategories.map((options, index) => {
//     const firstCat = options[index].firstElementChild;
//     console.log('Category:', firstCat.textContent); 
//     const sumCat = options[index].lastElementChild;
//     const firstChildren = sumCat.children;
// console.log('Elements:', sumCat.length);
// })



const sumCategories = document.querySelectorAll('.item');
console.log('Number of categories:' + " " + sumCategories.length);


for (let i=0; i<sumCategories.length; i+=1) {
  const firstCat = sumCategories[i].firstElementChild;
console.log('Category:',  firstCat.textContent);
const firstCatUl = sumCategories[i].lastElementChild;
const firstChildren = firstCatUl.children;
console.log('Elements:', firstChildren.length);
}