import React, { useEffect, useState } from 'react'
import { useTable, useSortBy } from 'react-table'

import getData from '../../services'
import CountryRow from './CountryRow'

export default function AllCountriesTable() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllCountriesData()
  }, [])

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
  //   {
  //     data,
  //     columns,
  //   },
  //  useSortBy
  // )

  const getAllCountriesData = async() => {
    setLoading(true)
    const response = await getData(setLoading)
    setData(response)
    setLoading(false)
  }

  // @todo styled components
  // @todo linter
  // @todo prettier

  console.log("DATA", data)

  return (
    <div>
      <p>Summary: {loading}</p>
      {data.map((country, index) => (
        <CountryRow key={index} country={country} />
      ))}
    </div>
  )
}
