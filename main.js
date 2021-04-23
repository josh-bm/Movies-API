fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1d1da333")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Prints result from `response.json()` in getRequest
  })
  .catch((error) => console.error(error));
