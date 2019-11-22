import React from 'react'
import './mountain.styles.scss'
import Washington from '../../images/washington.JPG'
const Mountain = (props)=>{
    const {mountain} = props
    let myMountain = ''
    let description = ''
    if (mountain) {
        myMountain = {...props.mountains[mountain]}
        
    }

    const mountainRender = 
        <div className="about-main">
            Mount {mountain} has an elavation of {myMountain.Elevation} feet. {}
            <img src={Washington} className="about-img "/>
        </div>
    return <div>
        {props.mountains[props.mountain] ? mountainRender: null}
    </div>
}

export default Mountain