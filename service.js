const API_KEY = "b4e4703e22e4a12760c693ae49366f0c";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export { renderMain, notifyMe, renderJournal };

function notifyMe(type, title, text) {
    return Swal.fire({
        timerProgressBar: true,
        theme: "dark",
        icon: type,
        position: "center",
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 4000,
        returnFocus: false
    });
}

function renderMain(movies, container, page) {
    container.innerHTML = ""
    movies.forEach(movie => {
        const newMovie = document.createElement("div");

        let bg
        let text
        const favList = JSON.parse(localStorage.getItem("myFav")) || []
        if (favList.some(x => x.id == movie.id)) {
            bg = "bg-green-600"
            text = "Added to my favorite"
        }

        newMovie.innerHTML = `<div id=${movie.id} class="hover-3d">
                                <figure class="max-w-96 rounded-2xl border-secondary border-1">
                                    <div class="card bg-base-96 w-96 shadow-2xl relative">
                                        <figure class="max-h-96">
                                            <img class="w-96 object-cover" src="${IMG_URL + movie.poster_path}" alt="Shoes" />
                                        </figure>
                                        <div class="card-body bg-base-300">
                                            <h2 class="card-title justify-center font-extrabold">${movie.title}</h2>
                                            <div class="stats shadow rounded-lg overflow-hidden">
                                                <div class="stat">
                                                    <div class="stat-figure text-primary">
                                                        <i class="fa-solid fa-star fa-2x" style="color: rgb(255, 179, 0);"></i>
                                                    </div>
                                                    <div class="stat-title">Movie Score</div>
                                                    <div class="stat-value text-primary">${movie.vote_average.toFixed(1)}</div>
                                                </div>
                                                <div class="stat">
                                                    <div class="stat-figure text-secondary">
                                                        <i class="fa-solid fa-eye fa-2x" style="color: rgb(255, 179, 59);"></i>
                                                    </div>
                                                    <div class="stat-title">View Count</div>
                                                    <div class="stat-value text-secondary">${movie.vote_count}</div>
                                                </div>
                                            </div>
                                            <p class="line-clamp-3 text-center">${movie.overview}
                                            </p>
                                            <div class="card-actions justify-center absolute top-91 z-10 self-center">
                                                <button class="btn ${bg || "btn-primary"} rounded-xl">
                                                    <span class="text-rotate text-xl duration-6000">
                                                        <span class="justify-items-center">
                                                            ${text || `<span>Add it to favorite</span><span class="font-bold italic">HERE👌 , FAST ▶︎▶︎</span>`}
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <!-- 8 empty divs needed for the 3D effect -->
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>`;

        container.append(newMovie);
    });
}


function renderJournal(movies, container) {
    container.innerHTML = ""

    movies.forEach(movie => {
        const newMovie = document.createElement("div")
        newMovie.innerHTML = `
                        <div id=${movie.id}
                            class="movie-card bg-base-300 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-5 shadow-xl transition hover:scale-105">

                            <div class="md:col-span-1 h-64 md:h-auto">
                                <img class="w-45 h-auto object-cover" src="${IMG_URL + movie.poster_path}" alt="movie poster">
                            </div>
                            <div class="md:col-span-2 p-6 flex flex-col gap-3">
                                <h2 class="text-2xl font-bold line-clamp-1">${movie.title}</h2>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-star text-sm"></i>
                                    <span class="font-bold">${movie.vote_average.toFixed(1)}</span>
                                </div>
                                <p class="text-sm leading-relaxed line-clamp-4">${movie.overview}</p>
                                <button class="btn-remove btn btn-dash btn-error w-50 rounded-xl self-center"><i class="fa-solid fa-trash-can"></i>
                                    Remove from
                                    Journal</button>
                            </div>

                            <div class="md:col-span-2 p-6 flex flex-col gap-4">
                                <textarea placeholder="What are your thoughts on this movie?"
                                    class="textarea textarea-accent w-100 h-30 resize-none transition rounded-2xl">${movie.note || ""}</textarea>
                                <button class="btn-note btn btn-secondary rounded-xl w-30 self-center">Save Note</button>
                            </div>
                        </div>`

        container.append(newMovie);
    });
}
