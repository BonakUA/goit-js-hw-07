const categoriesItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
});