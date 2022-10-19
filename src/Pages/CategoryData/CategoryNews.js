import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CategoryNews = () => {
  const news = useLoaderData()
  return (
    <div>CategoryNews: {news.length}</div>
  )
}

export default CategoryNews