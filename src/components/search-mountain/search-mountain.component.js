import React from 'react'
import MountainCard from '../mountain-card/mountain-card.component';
import SearchBox from '../search-box/search-box.component'
import mountain from '../../assets/mountains'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'

class SearchMountain extends React.Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <SearchBox />
                <CardDeck>
                {mountain.map((mountain)=>{return <div><MountainCard mountain={mountain.Mountain} image={mountain.imageUrl} key={mountain.id }/></div> })}
                </CardDeck>
            </div>
        )
    }

}

export default SearchMountain