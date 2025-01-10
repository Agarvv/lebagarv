import React from 'react' 
import Header from 'src/layout/header/Header';
import Search from 'src/features/search/Search'
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const { query } = useParams<{query: string}>()
    return(
      <>
        <Header searchQuery={query}/> 
        <Search /> 
      </> 
    )
}

export default SearchPage; 