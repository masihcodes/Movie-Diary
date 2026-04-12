import { notifyMe, renderMain, renderJournal } from "./service.js"

const cardHolder = document.querySelector("#card");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search-input");


let myFav = JSON.parse(localStorage.getItem("myFav")) || []
renderJournal(myFav, cardHolder)
notifyMe("info", "In Your Journal", `${myFav.length} Movie(s)`)



cardHolder.addEventListener("click", (e) => {

    const item = e.target.closest(".movie-card")
    const name = myFav.find(x => x.id == item.id).title

    if (e.target.closest(".btn-remove")) {
        myFav = myFav.filter(x => x.id != item.id)
        localStorage.setItem("myFav", JSON.stringify(myFav))
        notifyMe("warning", `${name}`, "Successfully Removed")
        renderJournal(myFav, cardHolder)
    }

    if (e.target.closest(".btn-note")) {
        const note = item.querySelector("textarea")
        myFav = myFav.map(x => x.id == item.id ? { ...x, note: note.value } : x)
        localStorage.setItem("myFav", JSON.stringify(myFav))
        notifyMe("info", `Your note fot ${name}`, `Successfully Saved`)
    }
})


searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `index.html?search=${encodeURIComponent(query)}`;
    } else {
        notifyMe("warning", "Empty Search", "Please type something!");
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});