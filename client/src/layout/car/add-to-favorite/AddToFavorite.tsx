import React from 'react';
import styles from './AddToFavorite.module.css';
import { usePost } from 'src/hooks/usePost';
import { addOrRemoveFavorite } from 'src/api/services/favorites/FavoritesService';

interface Props {
  carId: number;
  isFavorite: boolean;
}

const AddToFavorite: React.FC<Props> = ({ carId, isFavorite }) => {
  const { mutate } = usePost<number>(
    'Favorite updated successfully', // successMessage
    true, // withError
    addOrRemoveFavorite // serviceFunc
  );

  const handleFavoritesClick = () => {
    mutate(carId);
  };

  return (
    <div onClick={handleFavoritesClick} className={styles.favBtn}>
      <i className="fa fa-heart"></i>
    </div>
  );
};

export default AddToFavorite;