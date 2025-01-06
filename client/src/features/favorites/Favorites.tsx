import React from 'react'
import Cars from 'src/layout/cars/Cars'
import { useGet } from 'src/hooks/useGet'
import { CarShowcase } from 'src/types/cars/CarShowcase'
import { getFavorites } from 'src/api/services/favorites/FavoritesService'

const Favorites = () => {
  const { data: favorites } = useGet<CarShowcase[]>
  ({
    serviceFunc: getFavorites,
    successFunc: () => console.log("favs eceived"),
    withError: true
  })
  
  return (
    <>
     { favorites && <Cars cars={favorites}/>}
    </>
  )
}

export default Favorites