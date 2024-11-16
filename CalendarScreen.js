import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const CalendarScreen = ({ route }) => {
  const { userId, vetId } = route.params; // Obtener los parámetros de usuario o veterinario

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events`, {
          params: { userId, vetId }
        });
        setEvents(response.data);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchEvents();
  }, [userId, vetId]);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://localhost:5000/calendar.html' }} // URL de FullCalendar
        style={styles.webview}
        injectedJavaScript={`window.initialEvents = ${JSON.stringify(events)}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 }
});

export default CalendarScreen;
