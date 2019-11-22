import React from 'react'
import './search-mountain.styles.scss'
import mountains from '../../assets/mountains'
import {SearchBox} from '../search-box/search-box.component'
import Mountain from '../mountain-component/mountain.component'
class SearchMountain extends React.Component {
    constructor(){
        super()
    
        this.state = {mountains, searchField:'', renderMount:''}

    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
      }

    renderMountain = (mountain) => {
        this.setState({renderMount:this.state.mountains[mountain]})
    }


    render() {
        const { mountains, searchField } = this.state
        let mountain = null
        if(this.state.mountains.hasOwnProperty(searchField)){
            mountain = searchField
        } 

        return (
            
        <div> 
        <SearchBox
        placeholder={'Search Mountain'}
        handleChange={this.handleChange}
      />
        
        <Mountain mountain = {mountain} mountains= {this.state.mountains}/>
        </div>)
    }
}

export default SearchMountain