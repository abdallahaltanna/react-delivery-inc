// Get Current Date
const currentDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  return today;
};

// Get Weights that is Related to specific id
const getPkgsWeights = (pkgs) => pkgs.map((e) => e.weight);

// Get Prices that is Related to specific id
const getPkgsPrices = (prices) => prices.map((e) => e.price);

// Delete the kg word
const getWeightsAsNumbers = (weights) =>
  weights.map((weight) => +weight.replaceAll('kg', ''));

// To get Sum of Weights or Prices
const sum = (nums) => nums.reduce((partialSum, a) => partialSum + a, 0);

export { currentDate, getPkgsWeights, getPkgsPrices, getWeightsAsNumbers, sum };
