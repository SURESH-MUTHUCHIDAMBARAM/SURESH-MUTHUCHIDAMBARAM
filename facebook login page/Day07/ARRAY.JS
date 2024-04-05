// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // a) Get all countries from Asia continent/region using filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // b) Get all countries with a population of less than 2 lakhs using filter function
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);

    // c) Print name, capital, and flag details using forEach function
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // d) Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);

    // e) Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies['USD']);
    if (countryWithUSD) {
      console.log(`Country that uses USD: ${countryWithUSD.name.common}`);
    } else {
      console.log('No country uses USD as currency.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));
