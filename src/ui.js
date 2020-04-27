const parser = new DOMParser();
/**
 * 
 * @param {Array} products 
 * @returns {void}
 */
function renderProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML='';
    let tag_container;
    let dom_string = ``;
    let tags = []; 
    let uniq_id = '';
    let date = '';

    products.forEach(product => {
        tags = product.tags;
        date = product.posttime;
        uniq_id = 'tag-container-'+ product.id;
        console.log(`This is the unique id:${uniq_id}`) ;
        
        dom_string = `
        <div  class="col-4 item-product">
            <header class="video-title">${product.title}</header>

            <div class="video-container"> 
                <button class="btn-like" type="reset">
                    <i class="fa fa-thumbs-up">${product.rating}</i>
                </button> 
                <video height="100%" width="100%" controls  poster="${product.thumbnail_url}">
                    <source src="${product.video_url}" type="video/mp4">
                </video>
            </div><!-- Video-Container END -->

            <div class="video-footer row" > 
                <div id="${uniq_id}" class=" tag-container col-6">
                  
                </div>
                <div class="date-container col-6">${product.posttime}</div>
            </div>
        </div> <!-- Item-Product End -->
        `;
        let html_product = parser.parseFromString(dom_string, 'text/html'); 
        container.appendChild(html_product.documentElement);

        tag_container = document.getElementById(uniq_id);
        tag_container.innerHTML = '';
        tags.forEach(tag => {
            let tag_string = `<button class="btn-tag">${tag}</button>` ; 
            let html_tag = parser.parseFromString(tag_string, 'text/html'); 
            tag_container.appendChild(html_tag.documentElement);
        });

        
    });
}

