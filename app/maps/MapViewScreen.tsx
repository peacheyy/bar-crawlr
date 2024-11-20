import React from 'react'; 
import MapView from 'react-native-maps';
import { Text, StyleSheet, View } from 'react-native';

import getLocation from './GetUserLocation';

export default function MapViewComponent() {
  const { initialRegion } = getLocation(); 
  
  if (!initialRegion) {
    return (
      <View style={styles.container}>
        <Text>Loading location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  map: {
    width: '100%',
    height: '50%',
  },
});