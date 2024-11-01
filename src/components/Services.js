import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/esm/Card'

const data = [

  {
    id : 1,
    image : require('../assets/img1.jpg'),
    title : 'Wedding Reception',
    descriptiom : 'We re getting married, and you are invited to our reception; lets make it unforgettable! Join us for a lifetime of love and celebration starting today.Our love is the focus of our special day; come celebrate with us at the reception and feel the love.',
    link : '#'
  },
  {
    id : 2,
    image : require('../assets/img2.jpg'),
    title : 'Birthday Party',
    descriptiom : 'We re getting married, and you are invited to our reception; lets make it unforgettable! Join us for a lifetime of love and celebration starting today.Our love is the focus of our special day; come celebrate with us at the reception and feel the love.',
    link : '#'
  },
  {
    id : 3,
    image : require('../assets/img3.jpg'),
    title : 'Public EVENTS',
    descriptiom : 'We re getting married, and you are invited to our reception; lets make it unforgettable! Join us for a lifetime of love and celebration starting today.Our love is the focus of our special day; come celebrate with us at the reception and feel the love.',
    link : '#'
  },
  {
    id : 4,
    image : require('../assets/img3.jpg'),
    title : 'Mehendi  fUNCTION',
    descriptiom : 'We re getting married, and you are invited to our reception; lets make it unforgettable! Join us for a lifetime of love and celebration starting today.Our love is the focus of our special day; come celebrate with us at the reception and feel the love.',
    link : '#'
  },
  {
    id : 5,
    image : require('../assets/img3.jpg'),
    title : 'Wedding Reception',
    descriptiom : 'We re getting married, and you are invited to our reception; lets make it unforgettable! Join us for a lifetime of love and celebration starting today.Our love is the focus of our special day; come celebrate with us at the reception and feel the love.',
    link : '#'
  },
  {
    id : 6,
    image : require('../assets/img3.jpg'),
    title : 'Wedding Reception',
    descriptiom : 'We re getting married, and you are invited to our reception; lets make it unforgettable! Join us for a lifetime of love and celebration starting today.Our love is the focus of our special day; come celebrate with us at the reception and feel the love.',
    link : '#'
  },
]


const Services = () => {
  return (
    <>
    <section id='services' className='block services-block mt-3'>
    <div className='title-holder text-center'>
            <h2>SERVICES</h2>
            <div className='subtitle'>-We Provide Service For-</div>
    </div>
      <Container fluid >
          <Row className=''>
            {data.map((services) => {
              return(
                <Col   key={services.id} className='mt-2 d-flex justify-content-center ' >
              <div className='holder'>
                <Card className='text-center' style={{ width: '20rem', height:'33rem'}}>
                  <Card.Img variant="top" src={services.image} />
                  <Card.Body>
                    <Card.Title>{services.title}</Card.Title>
                    <Card.Text>{services.descriptiom}</Card.Text>
                    <a href={services.link} className='btn btn-primary'>Read More</a>
                  </Card.Body>
                </Card>
              </div>
              </Col>
              );
            })}
            
          </Row>
      </Container>
    </section>
    </>
  )
}

export default Services