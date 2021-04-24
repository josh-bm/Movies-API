//finding the root element
const app = document.getElementById("root");

//creating an element for the logo
const logo = document.createElement("img");
logo.src = "logo.png";

//creating a container element
const container = document.createElement("div");
container.setAttribute("class", "container");

//attaching the logo and the container to the root element
app.appendChild(logo);
app.appendChild(container);

//the url is our endpoint and contains the data that we want to work with
let url = "movies.json";

//TODO: copy/paste the link into a browser, so that you can see the data you are going to work with
//The endpoint is passed into the call of the fetch function. The call of the fetch returns a promise
fetch(url)
  //when the promise is resolved we extract the JSON part of the response object
  .then((response) => {
    return response.json();
  })
  //then we can work with the JSON data
  .then((data) => {
    //console.log(data);

    // We iterate through all the objects
    data.forEach((movie) => {
      //Create a div with a card class
      //console.log(movie.Title);
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      //Create an h1 and set the text content to the film's title
      const h1 = document.createElement("h1");
      //TODO: set the h1 to contain the title of the movie
      h1.textContent = movie.Title;

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      //card.appendChild(p);

      // TODO: Append the cards to the container element
      container.appendChild(card);

      let api = movie.Url;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((obj) => {
          console.log(obj);
          console.log(obj.Plot);
        })
        .catch((err) => {
          console.log("Something went wrong");
        });
    });
  })
  .catch((err) => {
    // Do something for an error here
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  });

// Create a p and set the text content to the film's description
// const p = document.createElement("p");
// TODO: limit the movie description to 300 chars, and then output it to p
// film.Plot = film.Plot.substring(0, 300); // Limit to 300 chars
// p.textContent = film.Plot;
