function renderProducts(products) {
    console.log("==============Render Products================");
    products.forEach(product => {
        console.log(`title: ${product.title} posttime:${product.posttime} rating: ${product.rating} tags: ${product.tags} id: ${product.id} `);
    });
}