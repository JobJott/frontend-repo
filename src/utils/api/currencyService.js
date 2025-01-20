export const fetchCurrencies = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=currencies"
    );
    const data = await response.json();

    const currencyMap = [];
    const uniqueCurrencies = new Set();

    data.forEach((country) => {
      if (country.currencies) {
        Object.keys(country.currencies).forEach((currencyCode) => {
          const currencySymbol = country.currencies[currencyCode]?.symbol;
          const currencyName = country.currencies[currencyCode]?.name;

          if (
            currencyName &&
            currencySymbol &&
            !uniqueCurrencies.has(currencyName)
          ) {
            uniqueCurrencies.add(currencyName);
            currencyMap.push({
              name: currencyName,
              symbol: currencySymbol,
              code: currencyCode,
            });
          }
        });
      }
    });

    return currencyMap.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Error fetching currencies:", error);
    throw error;
  }
};
