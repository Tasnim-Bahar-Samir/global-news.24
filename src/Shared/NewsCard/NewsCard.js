import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import {FaShareAlt,FaRegBookmark,FaStar,FaEye} from 'react-icons/fa'

const NewsCard = ({news}) => {
    const{_id,title,image_url,details,author,rating,total_view} = news;
  return (
    <Card className="mb-5">
    <Card.Header className='d-flex justify-content-between align-items-center'>
      <div className='d-flex gap-2'>
          <Image
           roundedCircle 
           src={author.img} 
           style ={{height:'60px'}}>
          </Image>
        <div>
          <p className='mb-0'>{author.name}</p>
          <p>{author.published_date}</p>
        </div>
      </div>
      <div>
        <FaRegBookmark/>
        <FaShareAlt/>
      </div>
    </Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={image_url} />

      <Card.Text>
      {
        details.length > 250? 
        <p>
            {details.slice(0,250) +'...'} <Link to={`/news/${_id}`}>See more</Link>
        </p>
        :
        <p>{details}</p>
        }
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted d-flex justify-content-between">
      <div>
        <FaStar className='text-warning me-1'/>
        <span>{rating?.number}</span>
      </div>
      <div>
        <FaEye className='me-1'/>
        <span>{total_view}</span>
      </div>
    </Card.Footer>
  </Card>
  )
}

export default NewsCard