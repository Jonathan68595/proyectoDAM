import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CitasScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Citas</Text>
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

export default CitasScreen;