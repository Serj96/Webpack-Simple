const addButton = document.getElementById("add");

addButton.addEventListener("click", addItem);

function addItem() {
    const list = document.getElementById("list");
    const listItems = list.getElementsByTagName("li");
    const last = listItems[listItems.length-1];
    
    last.innerHTML = `<li class="portfolio-cards__item">
              <div class="portfolio-link" >
                <div class="img-container">
                    <img
                      class="cards-img"
                      src=${"https://picsum.photos/200/300"}
                      alt="Технокряк"
                      width="450"
                      height="294"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div class="card-group">
                  <h2 class="cards-title">Технокряк</h2>
                </div>
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Подробнее
                 </button>
                 <button type="button" class="btn btn-outline-secondary" id="delete-btn">Удалить</button>
              </div>
            </li>`;

     list.appendChild(last); 
}