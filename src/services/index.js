// Credit to https://about-corona.net/documentation

export default async function getData() {
  const url = 'https://corona-api.com/countries';

  const response = await fetch(url, {
    cache: 'no-cache',
  });

  if (response.status === 200) {
    const json = await response.json();
    if (json.data && json.data.length > 0) {
      const formattedData = json.data.map((country) => {
        const {
          population,
          latest_data: {deaths},
        } = country;
        const hasDeathAndPopulationState = !!deaths && !!population;
        const deathsPerPopulation = hasDeathAndPopulationState
          ? deaths / population
          : 0;
        const deathsPerPopulationPercentage = deathsPerPopulation * 100;
        const deathsPerMillion = deathsPerPopulation * 1000000;
        const deathsPerHundredThousand = deathsPerPopulation * 100000;
        return {
          ...country,
          deathsPerPopulation,
          deathsPerPopulationPercentage,
          deathsPerMillion,
          deathsPerHundredThousand,
        };
      });
      // Sorted by deathsPerPopulation
      return formattedData.sort((a, b) =>
        a.deathsPerPopulation < b.deathsPerPopulation ? 1 : -1,
      );
    }
  }

  alert('Sorry, there was an error getting the data. Please try again later');
  return null;
}
