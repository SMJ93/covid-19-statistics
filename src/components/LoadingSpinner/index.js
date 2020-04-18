import React from 'react'
import Loader from 'react-loader-spinner'

export default function LoadingSpinner() {
  return (
    <Loader
      type="Oval"
      color="#00BFFF"
      height={50}
      width={50}
    />
  )
}
