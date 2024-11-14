import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const SignUpScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [numeroDeMascotas, setNumeroDeMascotas] = useState(1);
  const [nombresDeMascotas, setNombresDeMascotas] = useState(['']);

  const handleSignUp = async () => {
    if (!nombre || !correo || !telefono || !contraseña || numeroDeMascotas === 0 || nombresDeMascotas.length !== numeroDeMascotas) {
      Alert.alert('Error', 'Todos los campos son obligatorios y debes ingresar los nombres de todas las mascotas');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        nombre,
        correo,
        telefono,
        contraseña,
        numeroDeMascotas,
        nombresDeMascotas: nombresDeMascotas.join(', ')
      });
      Alert.alert('Éxito', 'Usuario registrado exitosamente');
      navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al registrar el usuario');
      console.error(error);
    }
  };

  const handleMascotaNombreChange = (index, value) => {
    const newNombresDeMascotas = [...nombresDeMascotas];
    newNombresDeMascotas[index] = value;
    setNombresDeMascotas(newNombresDeMascotas);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />
      <Text style={styles.label}>Número de Mascotas</Text>
      <Picker
        selectedValue={numeroDeMascotas}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setNumeroDeMascotas(itemValue);
          setNombresDeMascotas(Array(itemValue).fill(''));
        }}
      >
        {[...Array(11).keys()].slice(1).map((num) => (
          <Picker.Item key={num} label={num.toString()} value={num} />
        ))}
      </Picker>
      {Array.from({ length: numeroDeMascotas }).map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Nombre de Mascota ${index + 1}`}
          value={nombresDeMascotas[index]}
          onChangeText={(value) => handleMascotaNombreChange(index, value)}
        />
      ))}
      <Button title="Registrarse" onPress={handleSignUp} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
  },
});

export default SignUpScreen;