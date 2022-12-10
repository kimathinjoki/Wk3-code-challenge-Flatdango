const url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded',()=>{

    const movieDetails = ()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            for(let item of data){
                console.log(item)
                // const moviePoster = document.getElementById()

                const movieList = document.createElement("li")
                movieList.textContent = item.title

                const list = document.getElementsByClassName("dropdown-menu")
                movieList.classList.add("dropdown-item")
                list.appendChild(movieList)
            }
        })

    }
    movieDetails()

})