import data from './data.js'

let search = document.querySelector(".search");

let trendSec = document.querySelector(".slider")

let searchQuery = document.querySelector("input");

let seachContainer = document.querySelector(".container-search");

// let moviesContainer = document.createElement("div");
// moviesContainer.classList.add("movies-container");
// moviesContainer.classList.add("active");

// code to filter out the movies based the search text--------------------
const filterMovies = (startLetters, data) => {
    let res = []
    // data.filter(movie => {
    //     // console.log(movie)
    //     return movie.name.match(new RegExp(`${startLetters}`, 'i'))
    //     // movie.name.startsWith("fi");
    //     // console.log(movie.name);
    // })
    if (startLetters!==""){
        data.forEach(element => {
            // let temp = element.name.match(new RegExp(`${startLetters}`, 'i'))
            let temp = element.name.startsWith(`${startLetters}`);
            if (temp){
                res.push(element)
            }
        });
    }
    return res
}

searchQuery.addEventListener('input', (e) => {
    // seachContainer.childNodes = []
    // let children = seachContainer.children;

    let childern = seachContainer.childNodes

    let startLetters = e.target.value;
    let filteredMovies = filterMovies(startLetters, data);
    // console.log(filteredMovies);
    let moviesContainer = document.createElement("div");
    moviesContainer.classList.add("movies-container");
    let itemContainer = document.createElement("ul");
    moviesContainer.appendChild(itemContainer);
    filteredMovies.forEach((elem)=>{
        let item = document.createElement("a")
        item.href = elem.vide0
        item.innerHTML = elem.name
        itemContainer.appendChild(item)
    })
    moviesContainer.appendChild(itemContainer)

    if (childern.length === 5){
        seachContainer.appendChild(moviesContainer)
    }else {
        childern[5] = moviesContainer
    }
    // seachContainer.appendChild(moviesContainer)
})


// ------------------------------------------------------------------------

// code for smoothing the search bar animation
search.onclick = () => {
    document.querySelector(".container-search").classList.toggle("active");
    document.querySelector(".icon").classList.toggle("active");

    let m = document.querySelector(".input").classList;
    let flag = false;
    m.forEach(element => {
        if (element === "active"){
            flag = true;
        }
    });
    if (flag) {
        document.querySelector(".input").classList.remove("active");
   }else {
        setTimeout(() => {
            document.querySelector(".input").classList.add("active");    
        }, 300);
   }
}

//code to populate cards inside silder section on home page maximum 7 cards
let count = 1
let cardMaker = (data,trendSec) => {
    
    for (const element in data) {
        // console.log(data[element].vide0)
        let anchor = document.createElement("a")
        anchor.href = data[element].vide0
        let img = document.createElement("img")
        img.src = data[element].thumbnail
        img.id = `slider-${count}`
        let desc = document.createElement("div")
        desc.innerText = data[element].desc
        desc.classList.add("overlay")
        anchor.appendChild(img)
        anchor.appendChild(desc)
        console.log(anchor)

        trendSec.appendChild(anchor)
        count += 1
      }
}
cardMaker(data, trendSec)


  