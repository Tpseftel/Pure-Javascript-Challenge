const source1_path = "./data/source1.json";
const source2_path = "./data/source2.json";
let sort_by = "Newest First";
let search_key = '';
let products = [];

// If you want load data from data.js file set no_server=true
// If you want to load data with Ajax Request set no_server=false
const no_server = true;
if (no_server) {
    products = object_products;
}

async function initializeUI() {
    try {
        // Load Data
        if(!no_server){
            let products1 = await retrieveData(source1_path);
            let products2 = await retrieveData(source2_path);
            products1.forEach(product => products.push(product));
            products2.forEach(product => products.push(product));
        }
        renderSortedProducts(sort_by, products);
    } catch (error) {
        console.log(error.message)  ;
    }
    document.getElementById("btn-newest-first").style.backgroundColor= "#9D5A1E";
}

// Sort Listener
const order_menu = document.getElementById('order-menu');
order_menu.addEventListener("click", e => {
    if(e.target && e.target.nodeName == "BUTTON") {
        updateBackground(e);
        sort_by = e.target.innerHTML.trim();
        renderSortedProducts(sort_by, products);
    }
});

// Search Input Listener 
let product_array = [];
const search_input = document.getElementById('search-input');
search_input.addEventListener('input', e => {
    search_key = e.target.value;
    console.log(search_key);
    product_array =  search(search_key);
    renderSortedProducts(sort_by, product_array);
});


window.onload = initializeUI;
