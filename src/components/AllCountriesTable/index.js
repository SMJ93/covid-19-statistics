import React, {useEffect, useState, useMemo} from 'react';
import {useTable, useSortBy} from 'react-table';
import {Link} from 'react-router-dom';
import emojiFlags from 'emoji-flags';

import {getAllCountries} from '../../api';
import {LoadingSpinner} from '../../component-library';
import {numberWithCommas} from '../../helpers';
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
        Header: 'Covid-19 Death per Capita',
        columns: [
          {
            Header: 'Flag',
            accessor: 'code',
          },
          {
            Header: 'Country',
            accessor: 'name',
            Cell: ({row}) => (
              <div className="link-container">
                <Link
                  to={{
                    pathname: '/country/' + `${row.values.code}`,
                  }}>
                  {`${emojiFlags[row.values.code].emoji}${row.values.name}`}
                </Link>
              </div>
            ),
          },
          {
            Header: 'Deaths per population (%)',
            accessor: 'totalDeathsPerPopulationPercentage',
          },
          {
            Header: 'Population',
            accessor: 'population',
            Cell: ({row}) => (
              <span>{numberWithCommas(row.values.population)}</span>
            ),
          },
          {
            Header: 'Deaths',
            accessor: 'totalDeaths',
            Cell: ({row}) => (
              <span>{numberWithCommas(row.values.totalDeaths)}</span>
            ),
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
    const response = await getAllCountries(setLoading);
    setData(response);
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      {data && data.length > 0 && (
        <>
          <p>Last updated: {data[0].lastUpdated}</p>
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
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableContainer>
        </>
      )}
    </>
  );
}
