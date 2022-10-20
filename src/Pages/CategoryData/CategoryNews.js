import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../../Shared/NewsCard/NewsCard'

const CategoryNews = () => {
  const categoryNews = useLoaderData()
  return (
    <div>
      { 
        categoryNews.map(n => <NewsCard key={n._id} news = {n}/>)
      }  
    </div>
  )
}

export default CategoryNews