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
    population: population,
    lastUpdated,
    todaysFiguresHaveBeenPublished,
    todaysDeaths: today.deaths,
    todaysConfirmed: today.confirmed,
    totalDeaths: totalDeaths,
    totalConfirmed: latest_data.confirmed,
    totalRecovered: latest_data.recovered,
    totalCritical: latest_data.critical,
    deathRate: roundDecimals(latest_data.calculated.death_rate, 2),
    totalDeathsPerPopulation: totalDeathsPerPopulation,
    totalDeathsPerPopulationPercentage: roundDecimals(
      totalDeathsPerPopulationPercentage,
      6,
    ),
    totalDeathsPerMillion: roundDecimals(totalDeathsPerMillion, 2),
    totalDeathsPerHundredThousand: roundDecimals(
      totalDeathsPerHundredThousand,
      2,
    ),
  };
}
