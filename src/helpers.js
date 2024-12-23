// Get Data
/**
 * @param {String} url 
 * @returns {JSON}
 */
async function retrieveData(url) {
    try {
        let data = await getAjax(url);
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
 * Display Product by tag
 * @param {DomElement} 
 */
function searchByTag(e) {
    let filter_products = [];
    let tag = e.innerHTML.trim();
    products.forEach(product => {
        if(product.tags) {
            if(product.tags.includes(tag))
            filter_products.push(product);
        }
    renderSortedProducts(sort_by, filter_products);
    });
    console.log(filter_products);
}


/**
 * @param {*} sort_by sort order 
 * @param {*} products product array to sort
 */
function renderSortedProducts(sort_by, products) {
    sortProducts(sort_by, products);
    renderProducts(products);
}

/**
 * Sort products
 * @param {String} sort_term 
 */
function sortProducts(sort_by, products) {
    let descending = true;
    if (sort_by === "Newest First") return sortByDate(descending, products);
    else if(sort_by === "Oldest First") return sortByDate(!descending, products);
    else return sortByRating(products);
}

/**
 * Sort Data by date
 * @param {Boolean} isDescending 
 */
function sortByDate(isDescending, products) {
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
function sortByRating(products) {
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