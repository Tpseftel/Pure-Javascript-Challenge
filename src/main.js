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
    if (sort_term === "Newest First") {
    console.log("==========================Newest First==========================");
        sortNewestFirst(true);
    } else if(sort_term === "Oldest First") {
        console.log("==========================Oldest First==========================");
        sortNewestFirst(false);
    } else { //By Rating Case

    }
}
sortProducts("Newest First");
sortProducts("Oldest First");

/**
 * Sort Data by date
 * @param {Boolean} isNewestFirst 
 */
function sortNewestFirst(isNewestFirst) {
    let sorted_products = [] ;
    if (isNewestFirst){
        console.log(isNewestFirst);
        sorted_products = products.sort((a, b) => Date.parse(b.posttime) - Date.parse(a.posttime));
    }else {
        console.log(isNewestFirst);
        sorted_products = products.sort((a, b) => Date.parse(a.posttime) - Date.parse(b.posttime));
    }
}

