export interface Restaurant {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  deliveryTime: number;
  categories: string[];
  isOpen: boolean;
} 