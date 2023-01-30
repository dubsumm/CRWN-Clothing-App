//*REACT
import React from 'react'
//*COMPONENTS
import CategoryItem from '../category-item/CategoryItem'
//*STYLING
import './directory.styles.scss'


const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory
