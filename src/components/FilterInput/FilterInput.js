import React from 'react'
import './FilterInput.css'

const FilterInput = ({ value }) => {
  return (
    <ul className='list-filter-input'>
      <li ><input type="button" value={value} className='filter-input' /></li>
    </ul>

  )
}
export default FilterInput
