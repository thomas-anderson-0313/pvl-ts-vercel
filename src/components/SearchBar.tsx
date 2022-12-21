import { useState } from 'react';
import Search_icon from '../assets/search.png'

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const handleQuery = (e:any) => {
        setQuery(e.target.value)
    }

    return(
        <div className="search-prefix">
            <input 
                className='market-search-input'
                placeholder="Search for the one you want"
                type = "text"
                value = {query}
                onChange = {handleQuery}
            />
            <img className='market-search-icon' src = {Search_icon} alt = "search" />
        </div>
    )
}

export default SearchBar;