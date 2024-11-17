import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import axios from '../axiosConfig'; // Importa la configuración de Axios

const LoginScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLogin = async () => {
    if (!correo || !contraseña) {
      Alert.alert('Error', 'Correo y contraseña son obligatorios');
      return;
    }

    try {
      const response = await axios.post('/login', { // Usa la instancia configurada de Axios
        correo,
        contraseña
      });
      Alert.alert('Éxito', 'Inicio de sesión exitoso');
      navigation.navigate('Perfil'); // Navegar a la pantalla de perfil
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Alert.alert('Error', error.response.data);
      } else {
        Alert.alert('Error', 'Hubo un problema al iniciar sesión');
      }
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Text style={styles.text}>¿Aun no tienes cuenta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>REGÍSTRATE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default LoginScreen;