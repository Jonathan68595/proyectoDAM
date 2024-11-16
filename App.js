import React from "react";
import Inicio from './Screens/Inicio';

<<<<<<< HEAD
export default function App() {
  return <Inicio />
}
=======
const API_URL = 'http://localhost:5000'; // Cambia esto a la URL de tu backend en producción



 //prueba
const MapScreen = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(`${API_URL}/locations`);
        setLocations(response.data);
      } catch (error) {
        console.error('Error al obtener ubicaciones:', error);
      }
    };
    fetchLocations();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location._id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.name}
            description={location.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
});

export default MapScreen;
>>>>>>> origin/main
