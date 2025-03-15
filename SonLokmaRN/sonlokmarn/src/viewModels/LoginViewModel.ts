import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const useLoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      setIsLoading(true);
      // TODO: Burada gerçek API çağrısı yapılacak
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simüle edilmiş API çağrısı
      
      // Başarılı giriş simülasyonu
      console.log('Giriş başarılı:', { email });
      navigation.replace('Home');
      
    } catch (error) {
      Alert.alert('Hata', 'Giriş yapılırken bir hata oluştu.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    isLoading,
  };
}; 