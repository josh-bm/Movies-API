fetch("http://www.omdbapi.com/?s=avengers&apikey=3676265c")
  .then((res) => res.json())

  .then((data) => {
    console.log(data); // Prints result from `response.json()` in getRequest
  })
  .catch((error) => console.error(error));
