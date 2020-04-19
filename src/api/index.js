// Credit to https://about-corona.net/documentation

import {numberWithCommas, roundDecimals} from '../helpers';

export default async function getData() {
  const url = 'https://corona-api.com/countries';

  const response = await fetch(url, {
    cache: 'no-cache',
  });

  if (response.status === 200) {
    const json = await response.json();
    if (json.data && json.data.length > 0) {
      const formattedData = formatData(json.data);
      return formattedData
        .filter((country) => country.population !== null)
        .sort((a, b) =>
          a.totalDeathsPerPopulation < b.totalDeathsPerPopulation ? 1 : -1,
        );
    }
  }

  alert('Sorry, there was an error getting the data. Please try again later');
  return null;
}

function formatData(rawData) {
  return rawData.map(
    ({name, code, population, updated_at, today, latest_data}) => {
      const totalDeaths = latest_data.deaths;

      const hasDeathAndPopulationState = !!totalDeaths && !!population;
      const totalDeathsPerPopulation = hasDeathAndPopulationState
        ? totalDeaths / population
        : 0;
      const totalDeathsPerPopulationPercentage = totalDeathsPerPopulation * 100;
      const totalDeathsPerMillion = totalDeathsPerPopulation * 1000000;
      const totalDeathsPerHundredThousand = totalDeathsPerPopulation * 100000;

      const date = new Date(updated_at);

      const dateFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };

      const lastUpdated = new Intl.DateTimeFormat(
        'default',
        dateFormatOptions,
      ).format(date);

      return {
        name,
        code,
        population: numberWithCommas(population),
        lastUpdated,
        todaysDeaths: numberWithCommas(today.deaths),
        todaysConfirmed: today.confirmed,
        totalDeaths: numberWithCommas(totalDeaths),
        totalConfirmed: latest_data.confirmed,
        totalRecovered: latest_data.recovered,
        totalCritical: latest_data.critical,
        deathRate: latest_data.calculated.death_rate,
        totalDeathsPerPopulation,
        totalDeathsPerPopulationPercentage: roundDecimals(
          totalDeathsPerPopulationPercentage,
          6,
        ),
        totalDeathsPerMillion,
        totalDeathsPerHundredThousand,
      };
    },
  );
}
