// Get Data
/**
 *  * @param {String} url 
 * @returns {JSON}
 */
async function retrieveData(url) {
    try {
        let data = await getAjax(url);
        // Fix json with single quotes
        data = data.replace(/'/g, '"');
        return JSON.parse(data);
    } catch (error) {
        console.log(`Error:${error.message}`);
    }
}

/**
 * 
 * @param {String} url endpoint url 
 */
function getAjax(url) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = () => reject(Error("Network Error"));
        req.send();
    });
}

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
/**
 * Beautyfy dates format 
 * @param {String} date 
 * @returns {String}
 */
function beautifyDate(date) {
    let post_date = new Date(date);
    let beauty_date = `${post_date.getDate()}-0${post_date.getMonth() + 1}-${post_date.getFullYear()} ${post_date.getHours()}:${post_date.getMinutes()} `;
    return beauty_date;
}