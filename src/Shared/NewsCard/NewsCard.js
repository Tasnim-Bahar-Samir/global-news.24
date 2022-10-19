import React from 'react'
import { Card } from 'react-bootstrap'

const NewsCard = ({news}) => {
    const{title,image_url,details,author,rating,total_view} = news;
  return (
    <Card className="mb-5">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={image_url} />

      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
  )
}

export default NewsCard