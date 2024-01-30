import React from 'react'
import './ResultsSearch.css';

export const ResultsSearch = ({result}: {result: any}) => {
  return (
    <div className='search-result'>{result.name}</div>
  )
}
