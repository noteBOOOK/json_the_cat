const request = require('request');
const args = process.argv[2];
const query = "?q=" + args;

request(`https://api.thecatapi.com/v1/breeds/search${query}`, (error, response, body) => {
  if (error) return console.log(error);
  const data = JSON.parse(body);
  if (typeof data[0] === "undefined") {
    return console.log(`The breed ${args} cats is not real!`);
  } else {
    console.log(data[0].description);
  }
});