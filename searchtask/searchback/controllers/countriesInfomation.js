// Return
const handleCountries = (req, res, myTrie) => {
  const { id } = req.params;

  let countriesData = myTrie.getPrefix(id);
  console.log(countriesData);

  countriesData.length > 0
    ? res.status(200).json(countriesData)
    : res.status(404).json("Not exists");
};

module.exports = { handleCountries };
