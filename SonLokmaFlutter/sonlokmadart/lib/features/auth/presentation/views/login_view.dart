import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../viewmodels/auth_view_model.dart';
import '../../../../shared/widgets/custom_button.dart';
import '../../../../shared/widgets/custom_textfield.dart';

class LoginView extends StatelessWidget {
  const LoginView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'SonLokma',
              style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                color: Colors.red,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 32),
            CustomTextField(
              hintText: 'E-posta',
              onChanged:
                  (value) => context.read<AuthViewModel>().setEmail(value),
            ),
            const SizedBox(height: 16),
            CustomTextField(
              hintText: 'Şifre',
              isPassword: true,
              onChanged:
                  (value) => context.read<AuthViewModel>().setPassword(value),
            ),
            const SizedBox(height: 24),
            CustomButton(
              text: 'Giriş Yap',
              onPressed: () => context.read<AuthViewModel>().login(context),
            ),
          ],
        ),
      ),
    );
  }
}
