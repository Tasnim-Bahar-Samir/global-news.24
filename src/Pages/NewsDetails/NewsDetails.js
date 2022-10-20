import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'

const NewsDetails = () => {
    const news = useLoaderData()
    console.log(news)
    const {category_id,title,image_url,details} = news
  return (
    <div>
    <Card style={{ width: '100' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>{details}</p>
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="primary">See all news of this category</Button></Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default NewsDetails