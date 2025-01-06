import React, { useEffect } from 'react' 
import Cars from 'src/layout/cars/Cars'
import { useGet } from 'src/hooks/useGet'
import { CarShowcase } from 'src/types/cars/CarShowcase'
import { search } from 'src/api/services/search/SearchService'

const Search = () => {
    const { results } = useGet<CarShowcase[]>
    (
    {
        serviceFunc: () => search("bemve"),
        successFunc: () => console.log("Search success"),
        withError: true 
    }
    )
    
    return(
      <>
        <Cars cars={results}/> 
      </> 
    )
}

export default Search; 