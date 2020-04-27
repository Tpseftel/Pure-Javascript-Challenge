let sort_by = "Newest First";
let search_key = '';
const search_input = document.getElementById('search-input');
const order_menu = document.getElementById('order-menu');

function initializeUI() {
    // TODO: Load Data
    sortProducts();
    renderProducts(products);

}

// Sort Listener
order_menu.addEventListener("click", e => {
	if(e.target && e.target.nodeName == "BUTTON") {
        e.target.style.color = "red";
        sort_by = e.target.innerHTML.trim();
        sortProducts();
        renderProducts(products);
	}
});

// Search Listener
let product_array = [];
search_input.addEventListener('input', e => {
    search_key = e.target.value;
    console.log(search_key);
    product_array =  search(search_key);
    renderProducts(product_array);
});


window.onload = initializeUI;