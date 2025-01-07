import React, { useEffect } from 'react' 
import Cars from 'src/layout/cars/Cars'
import { useGet } from 'src/hooks/useGet'
import { CarShowcase } from 'src/types/cars/CarShowcase'
import { search } from 'src/api/services/search/SearchService'
import { useParams } from 'react-router-dom';

const Search = () => {
    const { query } = useParams<{query: string}>()
    
    const { data: results } = useGet<CarShowcase[]>
    (
    {
        serviceFunc: () => search(query || ""),
        successFunc: () => console.log("Search success"),
        withError: true 
    }
    )
    
    return(
      <>
        {results && <Cars cars={results}/>} 
      </> 
    )
}

export default Search; 