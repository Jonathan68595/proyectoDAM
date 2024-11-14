import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Notifiaciones</Text>
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

export default NotificationsScreen;