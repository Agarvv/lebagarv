import React from 'react' 
import Header from 'src/layout/header/Header';
import Search from 'src/features/search/Search'

const SearchPage = () => {
    return(
      <>
        <Header searchQuery="testing impl"/> 
        <Search /> 
      </> 
    )
}

export default SearchPage; 