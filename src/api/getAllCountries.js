import {formatCountry} from '../helpers';
import get from './service';

export default async function getAllCountries() {
  const response = await get('countries');

  if (response) {
    if (response.data && response.data.length > 0) {
      const allCountriesFormatted = response.data.map((country) =>
        formatCountry(country),
      );
      return allCountriesFormatted
        .filter((country) => country.population !== null)
        .sort((a, b) =>
          a.totalDeathsPerPopulation < b.totalDeathsPerPopulation ? 1 : -1,
        );
    }
  }
  return response;
}
