import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../viewmodels/restaurant_view_model.dart';
import '../../../../shared/widgets/restaurant_card.dart';

class RestaurantsView extends StatelessWidget {
  const RestaurantsView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SonLokma'),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () => Navigator.pushNamed(context, '/cart'),
          ),
        ],
      ),
      body: Consumer<RestaurantViewModel>(
        builder: (context, viewModel, child) {
          if (viewModel.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }
          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: viewModel.restaurants.length,
            itemBuilder: (context, index) {
              final restaurant = viewModel.restaurants[index];
              return RestaurantCard(
                restaurant: restaurant,
                onTap:
                    () => Navigator.pushNamed(
                      context,
                      '/restaurant-detail',
                      arguments: restaurant,
                    ),
              );
            },
          );
        },
      ),
    );
  }
}
