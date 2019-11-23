import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export const MountainCard = (props) => {

    const {imageUrl, mountain, cardDescription, elevation} = props
    return (
        <Link to={{
            pathname: "/expandedMountain",
            state: { props: props }
          }}><Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={imageUrl}  />
        <Card.Body>
            <Card.Title>{mountain}</Card.Title>
            <Card.Text>
                {cardDescription ? cardDescription : "Nothing but Pics of Bela so far!"} 
            </Card.Text>
            <Card.Text>
            Elevation: {elevation}
            </Card.Text>
        
           
        </Card.Body>
    </Card></Link>
    )
}

export default MountainCard