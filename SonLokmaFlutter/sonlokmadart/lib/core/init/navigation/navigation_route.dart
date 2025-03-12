import 'package:flutter/material.dart';
import '../../../features/auth/presentation/views/login_view.dart';
import '../../../features/restaurants/presentation/views/restaurants_view.dart';
import '../../../features/splash/presentation/views/splash_view.dart';

class NavigationRoute {
  static final NavigationRoute _instance = NavigationRoute._init();
  static NavigationRoute get instance => _instance;

  NavigationRoute._init();

  Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => SplashView());
      case '/login':
        return MaterialPageRoute(builder: (_) => LoginView());
      case '/restaurants':
        return MaterialPageRoute(builder: (_) => RestaurantsView());
      default:
        return MaterialPageRoute(
          builder:
              (_) => Scaffold(
                body: Center(child: Text('${settings.name} bulunamadı')),
              ),
        );
    }
  }
}
