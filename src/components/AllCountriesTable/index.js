import React, {useEffect, useState, useMemo} from 'react';
import {useTable, useSortBy} from 'react-table';
import emojiFlags from 'emoji-flags';

import getData from '../../api';
import {LoadingSpinner} from '../../component-library';
import {TableContainer} from './styles';

export default function AllCountriesTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountriesData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'All Countries',
        columns: [
          {
            Header: 'Flag',
            accessor: 'code',
          },
          {
            Header: 'Country',
            accessor: 'name',
          },
          {
            Header: 'Deaths per population (%)',
            accessor: 'totalDeathsPerPopulationPercentage',
          },
          {
            Header: 'Population',
            accessor: 'population',
          },
          {
            Header: 'Deaths',
            accessor: 'totalDeaths',
          },
          {
            Header: 'Last updated',
            accessor: 'lastUpdated',
          },
        ],
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      data,
      columns,
      initialState: {
        hiddenColumns: ['code'],
      },
    },
    useSortBy,
  );

  const getAllCountriesData = async () => {
    setLoading(true);
    const response = await getData(setLoading);
    setData(response);
    setLoading(false);
  };

  // @todo refactor into separate components
  // @todo fix sorting
  // @todo load country screen when user click country

  return (
    <div>
      <h1>Covid-19 Statistics</h1>
      {loading && <LoadingSpinner />}
      {data && data.length > 0 && (
        <TableContainer>
          <table {...getTableProps()} align="center">
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, k) => (
                    <th key={k} {...column.getHeaderProps()}>
                      <div>
                        <span {...column.getSortByToggleProps()}>
                          {column.render('Header')}
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell, k) => {
                      return (
                        <td key={k} {...cell.getCellProps()}>
                          {cell.column.id === 'name' &&
                            emojiFlags[cell.row.values.code].emoji}
                          {cell.value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContainer>
      )}
    </div>
  );
}
