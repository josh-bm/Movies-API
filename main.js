//finding the root element
const app = document.getElementById("root");

//creating a container element
const container = document.createElement("div");
container.setAttribute("class", "container");

//attaching the container to the root element
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
    // We iterate through all the objects
    data.forEach((movie) => {
      //Create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      //Create an h1 and set the text content to the film's title
      const h1 = document.createElement("h1");
      h1.textContent = movie.Title;

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      container.appendChild(card);

      let api = movie.Url;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((obj) => {
          //Insert Image
          const img = document.createElement("img");
          img.src = obj.Poster;
          card.appendChild(img);

          // Get the modal
          let modal = document.getElementById("myModal");

          // Get the <span> element that closes the modal
          let span = document.getElementsByClassName("close")[0];

          // When the user clicks on the button, open the modal
          card.onclick = function () {
            modal.style.display = "block";
            document.getElementById("modalImg").src = obj.Poster;
            document.getElementById("modalHeader").innerHTML = obj.Title;

            document.getElementById("modalTrailer").src = movie.Trailer;
            document.getElementById("modalText").innerHTML = obj.Plot;
          };

          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
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
