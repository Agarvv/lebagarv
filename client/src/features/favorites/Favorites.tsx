import React from 'react'
import Cars from 'src/layout/cars/Cars'
import { useGet } from 'src/hooks/useGet'
import { Favorites as favorites} from 'src/types/favorites/Favorites'
import { getFavorites } from 'src/api/services/favorites/FavoritesService'

const Favorites = () => {
  const { data: favorites } = useGet<favorites>
  ({
    serviceFunc: getFavorites,
    successFunc: () => console.log("favs eceived"),
    withError: true
  })
  
  return (
    <>
     <Cars cars={favorites}/>
    </>
  )
}

export default Favorites