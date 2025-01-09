import React from 'react'
import Cars from 'src/layout/cars/Cars'
import { useGet } from 'src/hooks/useGet'
import { CarShowcase } from 'src/types/cars/CarShowcase'
import { getFavorites } from 'src/api/services/favorites/FavoritesService'
import AppLayout  from 'src/layout/AppLayout/AppLayout'

const Favorites = () => {
  const { data: favorites } = useGet<CarShowcase[]>
  ({
    serviceFunc: getFavorites,
    successFunc: () => console.log("favs eceived"),
    withError: true
  })
  
  return (
    <>
     <AppLayout footer={true}>
      { favorites && <Cars cars={favorites}/>}
     </AppLayout> 
    </>
  )
}

export default Favorites