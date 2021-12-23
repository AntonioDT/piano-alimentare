let accordion = document.getElementsByClassName("meal-title");
let cards = document.getElementsByClassName("piano-alimentare")[0].children;
var foodToSearch = "";
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        let icon = this.getElementsByClassName("open-close-accordion");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon[0].innerText = "+"
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon[0].innerText = "-";
        }
    });
}

function searchFood(food) {
    foodToSearch = food;
}

function filterFood() {
    let cardsToShow = [];
    if (foodToSearch || foodToSearch != "") {
        Array.from(cards).forEach((card, index) => {
            if (findFood(card)) {
                cardsToShow.push(index);
            }
        });
    }
    showCards(cardsToShow);
}

function findFood(card) {
    let found = false;
    let foodGrid = card.getElementsByClassName("food-grid");
    Array.from(foodGrid).forEach(grid => {
        let elements = grid.getElementsByClassName("description");
        Array.from(elements).forEach(description => {
            let desc = description.textContent.toUpperCase();
            if (desc.includes(foodToSearch.toUpperCase())) {
                found = true;
            }
        });
    });
    return found;
}

function resetFood() {
    foodToSearch = "";
    let searchIinput = document.getElementsByClassName("search");
    searchIinput[0].value = "";
    Array.from(cards).forEach(card => {
        card.classList.remove("hidden");
    });
}

function showCards(cardsToShow) {
    Array.from(cards).forEach(card => {
        card.classList.add("hidden");
    });
    if (cardsToShow) {
        Array.from(cardsToShow).forEach(i => {
            cards[i].classList.remove("hidden");
        });
    }
}