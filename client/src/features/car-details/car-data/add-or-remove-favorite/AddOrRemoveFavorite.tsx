import React, { useState } from 'react';
import styles from './AddOrRemoveFavorite.module.css';
import { usePost } from 'src/hooks/usePost';
import { addOrRemoveFavorite } from 'src/api/services/favorites/FavoritesService';

interface Props {
  carId: number;
  isFavorite: boolean;
}

const AddOrRemoveFavorite: React.FC<Props> = ({ carId, isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);  
  const { mutate } = usePost<number>(
    'Favorite updated successfully', 
    true, 
    addOrRemoveFavorite 
  );

  const handleFavoritesClick = () => {
    mutate(carId);
    setFavorite(!favorite);
  };

  return (
    <div 
      onClick={handleFavoritesClick} 
      className={`${styles.favBtn} ${favorite ? styles.favorite : ''}`}
    >
      <i className="fa fa-heart"></i>
    </div>
  );
};

export default AddOrRemoveFavorite;