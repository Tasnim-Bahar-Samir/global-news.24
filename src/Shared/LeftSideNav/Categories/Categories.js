import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    console.log(categories)
  return (
    <div className='left-nav'>
        <h3>All Categories: {categories.length}</h3>
        {
            categories.map(category => <p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>)
        }
    </div>
  )
}

export default Categories