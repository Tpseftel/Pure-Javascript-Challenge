// TODO: Search
console.log("==============Initial Products==============");
console.log(products);
let search_key ='';
const search_input = document.getElementById('search-input');


// Listen for search box input
search_input.addEventListener('input', e => {
    // saving the input value
    search_key = e.target.value;

    console.log(search_key);
    search(search_key);
});


/**
 *  Returns array with matched products
 * @param {String} search_key 
 * @returns {Object}
 */
function search(search_key){
    search_key = search_key.trim();
    let results;
    results = products.filter(product =>
        product.title.toLowerCase().includes(search_key.toLowerCase())
    );

    console.log("===================Search Results======================");
    console.log(results);
}
