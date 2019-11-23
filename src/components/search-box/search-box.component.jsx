import React from 'react'
import SearchField from 'react-search-field';

const SearchBox = (props) => {
 


    return (
        <div>
            <SearchField
                placeholder='Mountain or Elevation'
                onChange={props.handleChange}
                
            />

        </div>)

}

export default SearchBox