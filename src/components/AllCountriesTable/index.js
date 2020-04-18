import React, {useEffect, useState} from 'react';

import getData from '../../services';
import CountryRow from './CountryRow';
import LoadingSpinner from '../LoadingSpinner';

export default function AllCountriesTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCountriesData();
  }, []);

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
  //   {
  //     data,
  //     columns,
  //   },
  //  useSortBy
  // )

  const getAllCountriesData = async () => {
    setLoading(true);
    const response = await getData(setLoading);
    setData(response);
    setLoading(false);
  };

  // @todo table

  // console.log('DATA', data);

  return (
    <div>
      <h1>Country deaths per population percentage</h1>
      {loading && <LoadingSpinner />}
      {data.map((country, index) => (
        <CountryRow key={index} country={country} />
      ))}
    </div>
  );
}
