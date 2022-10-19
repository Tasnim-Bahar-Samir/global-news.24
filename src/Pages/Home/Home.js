import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Home = () => {
  const allNews = useLoaderData();
  console.log(allNews)
  return (
    <div>
        <h3>This is home: {allNews.length}</h3>
        {
          allNews.map(news => <NewsCard key={news._id} news = {news}/>)
        }
    </div>
  )
}

export default Home