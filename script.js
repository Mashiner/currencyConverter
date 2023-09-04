// Set the exchange rates relative to a base currency
const rates = {
    USD: 1,
    EUR: 0.84
  };
  
  // Function to convert from one currency to another
  function convertCurrency(amount, fromCurrency, toCurrency) {
    // Convert the amount to the base currency (USD)
    const amountInUSD = amount / rates[fromCurrency];
  
    // Convert the amount from the base currency (USD) to the target currency
    const convertedAmount = amountInUSD * rates[toCurrency];
  
    return convertedAmount;
  }
  
  // Get references to the input elements
  const amountInput = document.getElementById("inputValue");
  const currenciesInput = document.getElementById("currencies");
  const convertButton = document.getElementById("convert");
  
  // Add an event listener to the convert button
  convertButton.addEventListener("click", () => {
    // Get the values from the input elements
    const amount = parseFloat(amountInput.value);
    const currencies = currenciesInput.value.split("2");
    const fromCurrency = currencies[0];
    const toCurrency = currencies[1];
  
    // Convert the currency
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
  
    // Display the result
    alert(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
  });
  