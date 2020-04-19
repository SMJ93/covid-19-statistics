import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import emojiFlags from 'emoji-flags';

import {getSingleCountry} from '../../api';
import {LoadingSpinner} from '../../component-library';
import {checkIfStatisticHasBeenPublished} from '../../helpers';
import {Page} from '../../components';

export default function Home() {
  const {countryCode} = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSingleCountryData();
  }, []);

  const getSingleCountryData = async () => {
    setLoading(true);
    const response = await getSingleCountry(countryCode);
    setData(response);
    setLoading(false);
  };

  return (
    <Page>
      {loading && <LoadingSpinner />}
      {data && (
        <>
          <h1>{`${emojiFlags[countryCode].emoji} ${data.name}`}</h1>
          <p>Last updated: {data.lastUpdated}</p>

          <hr />
          <h2>Today:</h2>
          <p>
            Deaths:{' '}
            {checkIfStatisticHasBeenPublished(
              data.todaysDeaths,
              data.todaysFiguresHaveBeenPublished,
            )}
          </p>
          <p>
            Confirmed cases:{' '}
            {checkIfStatisticHasBeenPublished(
              data.todaysConfirmed,
              data.todaysFiguresHaveBeenPublished,
            )}
          </p>

          <h2>Totals:</h2>
          <p>Deaths: {data.totalDeaths}</p>
          <p>Confirmed: {data.totalConfirmed}</p>
          <p>Recovered: {data.totalRecovered}</p>
          <p>Critical: {data.totalCritical}</p>
          <p>Population: {data.population}</p>

          <h2>Statistics:</h2>
          <p>
            Death rate (% of people who die after contracting Covid-19):{' '}
            {data.deathRate}
          </p>
          <p>
            Deaths per population (%): {data.totalDeathsPerPopulationPercentage}
          </p>
          <p>
            Deaths per one hundred thousand people :{' '}
            {data.totalDeathsPerHundredThousand}
          </p>
          <p>Deaths per million people : {data.totalDeathsPerMillion}</p>
        </>
      )}
    </Page>
  );
}
