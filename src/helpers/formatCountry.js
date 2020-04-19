import numberWithCommas from './numberWithCommas';
import roundDecimals from './roundDecimals';

export default function formatCountry({
  name,
  code,
  population,
  updated_at,
  today,
  latest_data,
}) {
  const totalDeaths = latest_data.deaths;

  const hasDeathAndPopulationState = !!totalDeaths && !!population;
  const totalDeathsPerPopulation = hasDeathAndPopulationState
    ? totalDeaths / population
    : 0;
  const totalDeathsPerPopulationPercentage = totalDeathsPerPopulation * 100;
  const totalDeathsPerMillion = totalDeathsPerPopulation * 1000000;
  const totalDeathsPerHundredThousand = totalDeathsPerPopulation * 100000;

  const todaysFiguresHaveBeenPublished =
    today.deaths !== 0 && today.confirmed !== 0;

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
    todaysFiguresHaveBeenPublished,
    todaysDeaths: numberWithCommas(today.deaths),
    todaysConfirmed: numberWithCommas(today.confirmed),
    totalDeaths: numberWithCommas(totalDeaths),
    totalConfirmed: numberWithCommas(latest_data.confirmed),
    totalRecovered: numberWithCommas(latest_data.recovered),
    totalCritical: numberWithCommas(latest_data.critical),
    deathRate: roundDecimals(latest_data.calculated.death_rate, 2),
    totalDeathsPerPopulation: totalDeathsPerPopulation,
    totalDeathsPerPopulationPercentage: roundDecimals(
      totalDeathsPerPopulationPercentage,
      6,
    ),
    totalDeathsPerMillion: numberWithCommas(
      roundDecimals(totalDeathsPerMillion, 2),
    ),
    totalDeathsPerHundredThousand: numberWithCommas(
      roundDecimals(totalDeathsPerHundredThousand, 2),
    ),
  };
}
