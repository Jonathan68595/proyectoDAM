import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Favoritos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritosScreen;
