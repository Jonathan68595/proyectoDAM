import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos las pantallas directamente desde la misma carpeta
import BuscarScreen from './Search';
import FavoritosScreen from './Favoritos';
import CitasScreen from './Dates';
import NotificacionesScreen from './Notifications';
import PerfilScreen from './Profile';
import LoginScreen from './Login'; // Importa LoginScreen
import SignUpScreen from './SignUp'; // Importa SignUpScreen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabBar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={AppContent} />
            <Tab.Screen name="Buscar" component={BuscarScreen} />
            <Tab.Screen name="Favoritos" component={FavoritosScreen} />
            <Tab.Screen name="Citas" component={CitasScreen} />
            <Tab.Screen name="Notificaciones" component={NotificacionesScreen} />
            <Tab.Screen name="Perfil" component={PerfilScreen} />
        </Tab.Navigator>
    );
}

function AppContent() {
    const [horizontalItems, setHorizontalItems] = React.useState([
        "Gatos", "Perros", "Aves", "Reptiles", "Bovinos", "Arácnidos", "Marsupiales"
    ]);
    const [verticalItems, setVerticalItems] = React.useState(["Recuadro 1", "Recuadro 2", "Recuadro 3"]);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} placeholder="Buscar..." />
            </View>

            <ScrollView style={styles.content}>
                <ScrollView horizontal style={styles.horizontalScroll}>
                    {horizontalItems.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.verticalScroll}>
                    {verticalItems.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

function Inicio() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AppContent">
                <Stack.Screen name="AppContent" component={BottomTabBar} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 8,
    },
    content: {
        flex: 1,
    },
    horizontalScroll: {
        flexDirection: 'row',
    },
    verticalScroll: {
        flexDirection: 'column',
    },
    item: {
        padding: 10,
        margin: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    bottomIcons: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: '#007BFF',
        alignItems: 'center',
        margin: 5,
    },
});

export default Inicio;