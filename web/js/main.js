const filters = document.getElementsByClassName('js-filter');
const newsItems = document.getElementsByClassName('js-filter-item');

for (let filterItem of filters) {
    filterClick(filterItem);
}

function filterClick(filterItem) {
    filterItem.addEventListener("click", (e) => {
        let clickedItem = e.target;
        for (let newsItem of newsItems) {
            if (clickedItem.id === "all") {
                newsItem.classList.remove("hidden");
            } else if(clickedItem.id !== newsItem.id ) {
                newsItem.classList.add("hidden")
            } else {
                newsItem.classList.remove("hidden");
            }
        }
    })
}











