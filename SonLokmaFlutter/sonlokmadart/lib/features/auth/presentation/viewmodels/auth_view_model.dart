import 'package:flutter/material.dart';

class AuthViewModel extends ChangeNotifier {
  String _email = '';
  String _password = '';
  bool _isLoading = false;

  bool get isLoading => _isLoading;

  void setEmail(String email) {
    _email = email;
    notifyListeners();
  }

  void setPassword(String password) {
    _password = password;
    notifyListeners();
  }

  Future<void> login(BuildContext context) async {
    if (_email.isEmpty || _password.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Lütfen tüm alanları doldurun')),
      );
      return;
    }

    _isLoading = true;
    notifyListeners();

    try {
      // API çağrısı simülasyonu
      await Future.delayed(const Duration(seconds: 2));
      Navigator.pushReplacementNamed(context, '/restaurants');
    } catch (e) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text('Hata: $e')));
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
