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
            'searchElevation':'',
            'searchName':''
        }



    }

    handleChange = (e) => {
        
        parseInt(e[0]) > 0 ? this.setState({ searchElevation:e, 'searchName':'' }) : this.setState({ searchName:e, 'searchElevation':''}) 
        
      }



    render() {
        
        const {searchElevation, searchName} = this.state
        const filteredMountains = this.state.searchElevation ? 
        
        mountain.filter((mountain)=>( parseInt(mountain.Elevation) >=   searchElevation )) :
        mountain.filter((mountain)=>(mountain.Mountain.toLowerCase().includes(searchName.toLowerCase())))

 
        return (
            <div>
                <SearchBox handleChange={this.handleChange}
                key="123"
                />
                <CardDeck>
                {filteredMountains.map((mountain)=>{return <div key={mountain.id}><MountainCard mountain={mountain.Mountain} image={mountain.imageUrl} /></div> })}
                </CardDeck>
            </div>
        )
    }

}

export default SearchMountain