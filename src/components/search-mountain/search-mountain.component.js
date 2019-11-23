import React from 'react'
import MountainCard from '../mountain-card/mountain-card.component';
import SearchBox from '../search-box/search-box.component'
import mountain from '../../assets/mountains'
import CardDeck from 'react-bootstrap/CardDeck'

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
        
        mountain.filter((mountain)=>( parseInt(mountain.elevation) <=   searchElevation )) :
        mountain.filter((mountain)=>(mountain.mountain.toLowerCase().includes(searchName.toLowerCase()))).slice(0, 5)

 
        return (
            <div>
                <SearchBox handleChange={this.handleChange}
                key="123"
                />
                <CardDeck>
                {filteredMountains.map((mountain)=>{return <div key={mountain.id}><MountainCard  {...mountain}/></div> })}
                </CardDeck>
            </div>
        )
    }

}

export default SearchMountain