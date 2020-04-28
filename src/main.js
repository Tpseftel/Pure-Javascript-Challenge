const source1_path = "./data/source1.json";
const source2_path = "./data/source2.json";
let sort_by = "Newest First";
let search_key = '';
const search_input = document.getElementById('search-input');
const order_menu = document.getElementById('order-menu');
let products = [];

async function initializeUI() {
    // Load Data
    let products1 = await retrieveData(source1_path);
    let products2 = await retrieveData(source2_path);
    products1.forEach(product => products.push(product));
    products2.forEach(product => products.push(product));
    console.log(products); 
    renderSortedProducts(sort_by,products);
    document.getElementById("btn-newest-first").style.backgroundColor= "#9D5A1E";
}

// Sort Listener
order_menu.addEventListener("click", e => {
    if(e.target && e.target.nodeName == "BUTTON") {
        updateBackground(e);
        sort_by = e.target.innerHTML.trim();
        renderSortedProducts(sort_by, products);
    }
});

// Search Listener
let product_array = [];
search_input.addEventListener('input', e => {
    search_key = e.target.value;
    console.log(search_key);
    product_array =  search(search_key);
    renderSortedProducts(sort_by, product_array);
});


window.onload = initializeUI;
