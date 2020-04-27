// TODO: Load Data
console.log(products);



/***
 *       _____                                _     
 *      / ____|                              | |    
 *     | (___     ___    __ _   _ __    ___  | |__  
 *      \___ \   / _ \  / _` | | '__|  / __| | '_ \ 
 *      ____) | |  __/ | (_| | | |    | (__  | | | |
 *     |_____/   \___|  \__,_| |_|     \___| |_| |_|
 *                                                  
 *                                                  
 */
let search_key ='';
console.log("==============Initial Products==============");
const search_input = document.getElementById('search-input');

// Listen for search box input
let product_array = [];
search_input.addEventListener('input', e => {
    // Save the input value
    search_key = e.target.value;
    console.log(search_key);
    product_array =  search(search_key);

    renderProducts(product_array);
});


function renderProducts(products) {
    console.log(products);
}

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
    return results;
}

/***
 *       _____                  _   
 *      / ____|                | |  
 *     | (___     ___    _ __  | |_ 
 *      \___ \   / _ \  | '__| | __|
 *      ____) | | (_) | | |    | |_ 
 *     |_____/   \___/  |_|     \__|
 *                                  
 *                                  
 */

const sort_list = ["Newest First", "Oldest First", "Rating"];

/**
 * Sort products
 * @param {String} sort_term 
 */
function sortProducts(sort_term) {
    let descending = true;
    if (sort_term === "Newest First") sortByDate(descending);
    else if(sort_term === "Oldest First") sortByDate(!descending);
    else sortByRating();
}

/**
 * Sort Data by date
 * @param {Boolean} isDescending 
 */
function sortByDate(isDescending) {
    let sorted_products = [] ;
    if (isDescending){
        sorted_products = products.sort((a, b) => Date.parse(b.posttime) - Date.parse(a.posttime));
    } else {
        sorted_products = products.sort((a, b) => Date.parse(a.posttime) - Date.parse(b.posttime));
    }
    return sorted_products;
}

/**
 * Returns products sorted by rating
 * @returns {Array} 
 */
function sortByRating() {
    let sorted_products = [];
    // Descending
    sorted_products = products.sort((a, b) => b.rating - a.rating);
    return sorted_products;
}
