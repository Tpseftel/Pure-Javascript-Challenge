const parser = new DOMParser();
function renderProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML='';
    let dom_string = ``;
    let tags = []; 
    let date = '';
    products.forEach(product => {
        tags = product.tags;
        date = product.posttime;
        
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
                <div class="tag-container col-6">
                    <button class="btn-tag">Tasty</button>
                    <button class="btn-tag">Juicy</button>
                    <button class="btn-tag">Healthy</button>
                </div>
                <div class="date-container col-6">${product.posttime}</div>
            </div>
        </div> <!-- Item-Product End -->
        `;

        let html = parser.parseFromString(dom_string, 'text/html'); 
        
        container.appendChild(html.documentElement);
    });
}

