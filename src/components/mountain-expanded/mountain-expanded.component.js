import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './mountain-expanded.styles.scss'

const MountainExpanded = (props)=>{
    const {bestView,description, elevation,expandedImage,imageUrl,mountain } = props.location.state.props
    
    console.log(description)
    return(

    <div> 
    <Button variant="light" as={Link} to="/search">Back To Search</Button>
    
    <div className='expanded-body'> 
        <div className="description">{description ? description:"Page is Currently being worked on, enjoy some pictures of Bela in the meantime!"}</div>
        <img src={expandedImage ? expandedImage :"https://res.cloudinary.com/dqncfvnsi/image/upload/v1574525945/bela/belamountain_uow7yo.jpg"} alt="best view" className="best-view"/>
        <img src={bestView ? bestView: "https://res.cloudinary.com/dqncfvnsi/image/upload/v1574525857/bela/bela_qgtdkr.jpg"} alt="best view" className="best-view"/>
    </div> 
    </div>
    )}

export default MountainExpanded