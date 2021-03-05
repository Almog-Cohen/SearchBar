const express = require("express");
const cors = require("cors");
const trie = require("trie-prefix-tree");
const countriesData = require("./countries");
const countriesInformation = require("./controllers/countriesInfomation");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 3001;
app.use(morgan("combined"));
app.use(cors());

const countryNames = [];
countriesData.data.map((country) => countryNames.push(country.name));
const myTrie = trie(countryNames);

app.get("/", function (req, res) {
  res.send("Server run");
});

app.get("/countries/:id", (req, res) => {
  countriesInformation.handleCountries(req, res, myTrie);
});

app.listen(PORT, () => {
  console.log(`app is runing on port ${PORT}`);
});
