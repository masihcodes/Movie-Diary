import { notifyMe, renderMain } from "./service.js"

const API_KEY = "b4e4703e22e4a12760c693ae49366f0c";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const cardHolder = document.querySelector("#card");
const searchBtn = document.getElementById("searchBtn")
const searchInput = document.getElementById("search-input")
const pageBtn = document.querySelector(".join")

let moviesData = []
let page = 1

async function getMovieData() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,);
    if (res.ok) {
        const data = await res.json();
        moviesData = data.results
        renderMain(moviesData, cardHolder, page);

        notifyMe("success", "Connected to the server", "Movies will show successfully")
    } else {
        notifyMe("error", "Not Connected to the server", `${res.status}, Data Not Founded`)
    }
}
getMovieData()


cardHolder.addEventListener("click", async (e) => {
    const favBTN = e.target.closest(".hover-3d")
    if (favBTN) {
        const myID = favBTN.id
        const myMovie = moviesData.find(x => x.id == myID)

        const favList = JSON.parse(localStorage.getItem("myFav")) || []

        if (favList.some(x => x.id == myID)) {
            notifyMe("warning", `${myMovie.title}`, "Already Added")
        } else {
            favList.push(myMovie)
            localStorage.setItem("myFav", JSON.stringify(favList))
            renderMain(moviesData, cardHolder, page);
            notifyMe("success", `${myMovie.title}`, "Successfully Added")
        }
    }
})

searchBtn.addEventListener("click", async (e) => {
    if (!searchInput.value.trim()) return notifyMe("warning", "Empty Search", "Please type something!");

    cardHolder.innerHTML = ""
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchInput.value.trim()}`)
    if (res.ok) {
        const data = await res.json();
        moviesData = data.results;
        renderMain(moviesData, cardHolder, page);
    } else {
        throw new Error(`${res.status}, Data Not Founded`);
    }
})

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

pageBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (e.target.textContent == "«" && page > 1) {
        page--
        await getMovieData()
        e.target.nextElementSibling.textContent = "Page " + page
    }

    if (e.target.textContent == "»") {
        page++
        await getMovieData()
        e.target.previousElementSibling.textContent = "Page " + page
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
})