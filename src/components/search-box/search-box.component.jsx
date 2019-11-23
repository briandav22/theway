import React from 'react'
import SearchField from 'react-search-field';

const SearchBox = () => {

    const onChange = (e) => {
        console.log(e)
    }

    return (
        <div>
            <SearchField
                placeholder='Search item'
                onChange={onChange}
            />

        </div>)

}

export default SearchBox