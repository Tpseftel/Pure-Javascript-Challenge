const parser = new DOMParser();

/**
 * Selects the clicked button
 * @param {element} e 
 */
function updateBackground(e){
    let buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach(btn => {
        btn.style.backgroundColor ="#F0AD4E";
    });
    e.target.style.backgroundColor = "#9D5A1E";
}

/**
 * @param {Array} products 
 * @returns {void}
 */
function renderProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML='';
    let dom_string = ``;
    let tags = []; 
    let tag_uniq_id = '';
    let post_date = '';
    let html_product='';

    products.forEach(product => {
        post_date = beautifyDate(product.posttime);
        let rating = 'xxx';
        if(product.rating)rating = product.rating;
        tags = product.tags;
        tag_uniq_id = 'tag-container-'+ product.id;
        
        dom_string = `
        <div  class="col-4 item-product">
            <header class="video-title">${product.title}</header>

            <div class="video-container"> 
                <button class="btn-like" type="reset">
                    <i class="fa fa-thumbs-up">${rating}</i>
                </button> 
                <video height="100%" width="100%" preload="none" controls  poster="${product.thumbnail_url}">
                    <source src="${product.video_url}" type="video/mp4">
                </video>
            </div><!-- Video-Container END -->

            <div class="video-footer row" > 
                <div id="${tag_uniq_id}"  class="tag-container col-6">
                </div>
                <div class="date-container col-6">${post_date}</div>
            </div>
        </div> <!-- Item-Product End -->
        `;
        html_product = parser.parseFromString(dom_string, 'text/html').body.children[0]; 
        container.appendChild(html_product);
        
        renderTags(tag_uniq_id, tags);
    });
}

/**
 * @param {String} parent parent container id
 * @param {Array} tags  
 */
function renderTags(parent, tags){
    let tag_container = document.getElementById(parent);
    tag_container.innerHTML = "" ;
    let tag_string = "";
    let html_tag  = "";
    tags.forEach(tag => {
        tag_string = `<button class="btn-tag" onclick="searchByTag(this)">${tag}</button>` ; 
        // Appent to parent
        html_tag = parser.parseFromString(tag_string, 'text/html').body.children[0]; 
        tag_container.appendChild(html_tag);
    });
}
