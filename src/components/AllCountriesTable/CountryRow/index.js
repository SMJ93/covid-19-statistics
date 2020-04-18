import React from 'react';
import ReactCountryFlag from 'react-country-flag';

export default function CountryRow({country}) {
  // console.log(country);
  return (
    <div>
      <ReactCountryFlag countryCode={country.code} />
      <span>{country.name}</span>
      <span>- {country.deathsPerPopulationPercentage}</span>
    </div>
  );
}
