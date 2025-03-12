import 'package:flutter/material.dart';
import '../../data/models/restaurant_model.dart';

class RestaurantViewModel extends ChangeNotifier {
  bool _isLoading = false;
  List<RestaurantModel> _restaurants = [];

  bool get isLoading => _isLoading;
  List<RestaurantModel> get restaurants => _restaurants;

  RestaurantViewModel() {
    fetchRestaurants();
  }

  Future<void> fetchRestaurants() async {
    _isLoading = true;
    notifyListeners();

    try {
      // API çağrısı simülasyonu
      await Future.delayed(const Duration(seconds: 2));
      _restaurants = [
        RestaurantModel(
          id: '1',
          name: 'Lezzet Dünyası',
          imageUrl: 'https://picsum.photos/seed/restaurant1/400/200',
          cuisine: 'Türk Mutfağı',
          rating: 4.5,
          deliveryTime: 30,
        ),
        RestaurantModel(
          id: '2',
          name: 'Pizza Express',
          imageUrl: 'https://picsum.photos/seed/restaurant2/400/200',
          cuisine: 'İtalyan Mutfağı',
          rating: 4.2,
          deliveryTime: 40,
        ),
      ];
    } catch (e) {
      debugPrint('Hata: $e');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
