import { useState, useCallback } from 'react';
import { Restaurant, RestaurantFilter } from '../models/Restaurant';

// Örnek veri - Gerçek uygulamada bir servisten gelecek
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

export const useRestaurantViewModel = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(MOCK_RESTAURANTS);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<RestaurantFilter>({});

  const fetchRestaurants = useCallback(async () => {
    setIsLoading(true);
    try {
      // TODO: Burada gerçek API çağrısı yapılacak
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let filteredRestaurants = [...MOCK_RESTAURANTS];
      
      if (filter.category) {
        filteredRestaurants = filteredRestaurants.filter(r => 
          r.categories.includes(filter.category!)
        );
      }

      if (filter.searchQuery) {
        const query = filter.searchQuery.toLowerCase();
        filteredRestaurants = filteredRestaurants.filter(r =>
          r.name.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query)
        );
      }

      if (filter.isOpen !== undefined) {
        filteredRestaurants = filteredRestaurants.filter(r => 
          r.isOpen === filter.isOpen
        );
      }

      setRestaurants(filteredRestaurants);
    } catch (error) {
      console.error('Restoranlar yüklenirken hata oluştu:', error);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  const updateFilter = useCallback((newFilter: Partial<RestaurantFilter>) => {
    setFilter(prev => ({ ...prev, ...newFilter }));
  }, []);

  return {
    restaurants,
    isLoading,
    filter,
    updateFilter,
    refreshRestaurants: fetchRestaurants,
  };
}; 