import data from './data.js'

let search = document.querySelector(".search");

let trendSec = document.querySelector(".slider")

let searchQuery = document.querySelector("input");

let seachContainer = document.querySelector(".container-search");

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

    // console.log(e)
    console.log(searchQuery)
    let startLetters = e.target.value;
    let filteredMovies = filterMovies(startLetters, data);

    //creating the element to be added after populating th equereyed movies
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

    if (seachContainer.childElementCount<=2){
        seachContainer.appendChild(moviesContainer)
    }else {
        seachContainer.lastElementChild.remove()
        seachContainer.appendChild(moviesContainer)
    }
    // seachContainer.appendChild(moviesContainer)
})


// ------------------------------------------------------------------------

// code for smoothing the search bar animation
let moviesContainerVisible = true;
search.onclick = () => {
    document.querySelector(".container-search").classList.toggle("active");
    document.querySelector(".icon").classList.toggle("active");

    // code to remove the search movies container from the bottom
    if (!moviesContainerVisible && seachContainer.childElementCount>2){
        //reaseting the value of search last to black when it closes
        searchQuery.value = ""
        seachContainer.lastElementChild.remove()
    }
    moviesContainerVisible = !moviesContainerVisible
    //-------------------------------------------------------------


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
// count just to give correct id to image
let count = 1
let cardMaker = (data,trendSec) => {
    
    for (const element in data) {
        // console.log(data[element].vide0)

        // creating the cards for the slider component
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
        // console.log(anchor)

        trendSec.appendChild(anchor)
        count += 1
      }
}
cardMaker(data, trendSec)


  
