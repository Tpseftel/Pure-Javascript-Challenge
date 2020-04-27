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

/**
 * Sort products
 * @param {String} sort_term 
 */
function sortProducts() {
    let descending = true;
    if (sort_by === "Newest First") sortByDate(descending);
    else if(sort_by === "Oldest First") sortByDate(!descending);
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
    
    products = sorted_products;
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
    
    products = sorted_products;
    return sorted_products;
}

// Search
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


