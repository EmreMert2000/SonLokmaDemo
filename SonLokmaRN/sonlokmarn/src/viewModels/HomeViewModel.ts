import { useState, useCallback } from 'react';
import { Restaurant } from '../models/Restaurant';

// Örnek veri
const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'Lezzet Durağı',
    description: 'En iyi Türk mutfağı lezzetleri',
    imageUrl: 'https://picsum.photos/seed/rest1/800/600',
    rating: 4.8,
    deliveryTime: 30,
    categories: ['Türk Mutfağı', 'Kebap'],
    isOpen: true,
  },
  {
    id: '2',
    name: 'Pizza Express',
    description: 'İtalyan lezzetleri evinizde',
    imageUrl: 'https://picsum.photos/seed/rest2/800/600',
    rating: 4.5,
    deliveryTime: 45,
    categories: ['Pizza', 'İtalyan'],
    isOpen: true,
  },
  {
    id: '3',
    name: 'Burger House',
    description: 'El yapımı özel burgerler',
    imageUrl: 'https://picsum.photos/seed/rest3/800/600',
    rating: 4.6,
    deliveryTime: 25,
    categories: ['Burger', 'Fast Food'],
    isOpen: true,
  },
];

export const useHomeViewModel = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(MOCK_RESTAURANTS);
  const [isLoading, setIsLoading] = useState(false);

  const refreshRestaurants = useCallback(async () => {
    setIsLoading(true);
    try {
      // TODO: Burada gerçek API çağrısı yapılacak
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRestaurants(MOCK_RESTAURANTS);
    } catch (error) {
      console.error('Restoranlar yüklenirken hata oluştu:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    restaurants,
    isLoading,
    refreshRestaurants,
  };
}; 