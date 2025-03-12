import 'package:flutter/material.dart';

class NavigationService {
  static final NavigationService _instance = NavigationService._init();
  static NavigationService get instance => _instance;

  NavigationService._init();

  final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

  Future<void> navigateToPage({required String path, Object? arguments}) async {
    await navigatorKey.currentState?.pushNamed(path, arguments: arguments);
  }

  Future<void> navigateToPageClear({
    required String path,
    Object? arguments,
  }) async {
    await navigatorKey.currentState?.pushNamedAndRemoveUntil(
      path,
      (route) => false,
      arguments: arguments,
    );
  }
}
