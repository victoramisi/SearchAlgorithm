//---------------Chatpter 1-------------------

//Create movie title and year function
function createMovieTitleAndYear(title, year) {
  let titleAndYear = ``;
  titleAndYear = `${title} (${year})`;
  return titleAndYear;
}

//---------------Chapter 2-------------------
//Create movie description function
function createMovieDescription(description) {
  let movieDescription = ``;
  movieDescription = description;
  return movieDescription;
}

//---------------Chapter 3-------------------
//Create movie container
function createMovieContainer() {
  let movieSection = document.createElement("div");
  return movieSection;
}
//---------------Chapter 4-------------------
//get Movie container and add movie elements
movieContainer = document.getElementById("movieSection");

//---------------Chapter 5-------------------
//Loop through the movies data
function renderMovies(movies) {
  for (let movieItem of movies) {
    let titleAndYear = document.createElement("h1");
    let description = document.createElement("p");
    titleAndYear.setAttribute("class", "centerTextNameTitleAndYear");
    description.setAttribute("class", "centerTextDescription");
    //----------------------------------
    titleAndYear.textContent = createMovieTitleAndYear(
      movieItem.title,
      movieItem.year
    );
    //----------------------------------
    description.textContent = createMovieDescription(movieItem.description);
    //----------------------------------
    let movieSection1 = createMovieContainer();
    movieSection1.setAttribute("class", "eachMovieSection");
    movieSection1.addEventListener("click", (e) => {
      let target = e.target;
      if (target.matches(".centerTextNameTitleAndYear")) {
        description.classList.toggle("centerTextDescriptionTrue");
      }
    });
    movieSection1.append(titleAndYear, description);
    movieContainer.append(movieSection1);
  }
}
renderMovies(movies);
//---------------Chapter 6-------------------
//handle the form
function empty(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}
let form = document.getElementById("searchForm");
let searchBox = document.getElementById("searchBox");
form.addEventListener("submit", (e) => e.preventDefault());
searchBox.addEventListener("input", (e) => {
  let textInput = e.target.value.toLowerCase();
  let filterArray = movies.filter((value) => {
    if (value.title.toLowerCase().includes(textInput)) {
      return value;
    }
  });
  empty(movieContainer);
  renderMovies(filterArray);
});
