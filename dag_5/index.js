/*const allMovies = database.Movies;

const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search-input-field");
const searchField = searchInput.firstElementChild;
const searchButton = searchField.nextElementSibling;
const numberOfResults = searchButton.nextElementSibling;

const filterObject = {
  "After 2014": 2014,
  "Avengers": "avengers",
  "X-Men": "x-men",
  "Princess": "princess",
  "Batman": "batman"
}

const filterMenuButton = document.getElementById("filter-menu-button");
const filterButtonList = document.getElementById("filter-button-list");

const switchClasses = (array, action) => array.forEach(el => el.classList[action]("active"));

const resetFilters = () => {
  const radioButtons = Array.from(filterButtonList.getElementsByTagName("input"));
  radioButtons.forEach(button => button.checked = false);
  highlightActiveFilter();
}

const addFilterButtons = (filterName) => {
  const item = document.createElement("li");
  filterButtonList.appendChild(item);
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "filter-button";
  item.appendChild(input);
  const label = document.createElement("label");
  label.innerHTML = filterName;
  item.appendChild(label)
}

for (filterName in filterObject) {
  addFilterButtons(filterName)
}

const filterButtons = Array.from(filterButtonList.getElementsByTagName("li"));
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterMovieList(button);
  })
});

const filterMovieList = (button) => {
  resetSearch();
  clearMovieList();
  button.firstChild.checked = true;
  highlightActiveFilter();
  const filterValue = filterObject[button.lastElementChild.innerHTML];
  allMovies.filter(movie => isNaN(parseInt(filterValue)) ? movie.Title.toLowerCase().includes(filterValue) :
    movie.Year >= filterValue).forEach(movie => addMovieToList(movie));
}

filterMovieList(filterButtons[0]);
*/

const unorderedListLocation = document.querySelector("#listed-movies")
const navInputNameLocation = document.getElementsByName("movie")
const addMoviesToDom = (eachMovie) => { 
    eachMovie.forEach(movie => {
        let titleLink = "https://www.imdb.com/title/" + movie.imdbID
        let newLi = document.createElement("li")
        let newA = document.createElement("a")
        let newImg = document.createElement("img")
        newImg.setAttribute("src", movie.Poster)
        newA.setAttribute("href", titleLink)
        newA.setAttribute("target", "_blank")         
        newA.appendChild(newImg)       
        newLi.appendChild(newA)
        unorderedListLocation.appendChild(newLi)        
    });          
};
addMoviesToDom(movieDatabase)
const movieTitleArray = (eachMovie, wordToFilter) => {
    let x = eachMovie.filter(movie => movie.Title.includes(wordToFilter))
    console.log(x)
    addMoviesToDom(x)
}
const movieYearArray = (eachMovie) => {
    let x = eachMovie.filter(movie => movie.Year >= 2014)
    console.log(x)
    addMoviesToDom(x)
}
const removeMovies = (eachMovie) => {
    unorderedListLocation.innerHTML='';
}
const domRadioSelection = (radioSelection) => {
    switch (radioSelection.srcElement.value) {
        case "after2014" : 
            removeMovies()           
            movieYearArray(movieDatabase)      
        break;
        case "Avengers" :
            removeMovies()   
            movieTitleArray(movieDatabase, radioSelection.srcElement.value)          
        break;
        case "X-Men" :
            removeMovies()   
            movieTitleArray(movieDatabase, radioSelection.srcElement.value)
        break;
        case "Princess" :
            removeMovies()   
            movieTitleArray(movieDatabase, radioSelection.srcElement.value)
        break;
        case "Batman" :
            removeMovies()
            movieTitleArray(movieDatabase, radioSelection.srcElement.value)           
            break;
        default:
            addMoviesToDom(movieDatabase)
      }
}
let inputArray = Array.from(navInputNameLocation);
inputArray.forEach(element => element.addEventListener('change', domRadioSelection))