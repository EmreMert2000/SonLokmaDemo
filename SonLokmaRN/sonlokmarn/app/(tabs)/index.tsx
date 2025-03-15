import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRestaurantViewModel } from '../features/restaurant/viewModels/useRestaurantViewModel';
import { RestaurantCard } from '../core/components/RestaurantCard';
import { Restaurant } from '../features/restaurant/models/Restaurant';

export default function HomeScreen() {
  const { restaurants, isLoading, refreshRestaurants } = useRestaurantViewModel();

  const renderRestaurantItem = ({ item }: { item: Restaurant }) => (
    <RestaurantCard
      restaurant={item}
      onPress={() => {
        // TODO: Restoran detay sayfasına yönlendirme yapılacak
        console.log('Restoran seçildi:', item.id);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SON LOKMA</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#FF4B2B" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={restaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        onRefresh={refreshRestaurants}
        refreshing={isLoading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4B2B',
  },
  cartButton: {
    padding: 8,
  },
  listContainer: {
    padding: 16,
  },
});
