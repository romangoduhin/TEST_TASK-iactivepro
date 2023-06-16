import {useEffect, useState} from "react";

export function useFavorites(initialFavorites = []) {
  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');

    if (favoritesFromStorage) {
      setFavorites(JSON.parse(favoritesFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (messageId) => {
    if (favorites.includes(messageId)) {
      setFavorites(favorites.filter((favorite) => favorite !== messageId));
    } else {
      setFavorites([...favorites, messageId]);
    }
  };

  return [favorites, toggleFavorite];
}