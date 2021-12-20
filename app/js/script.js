let accordion = document.getElementsByClassName("meal-title");

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