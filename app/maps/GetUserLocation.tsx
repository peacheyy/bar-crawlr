import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export default function getLocation() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [initialRegion, setInitialRegion] = useState<Region | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Location permission denied');
                    return;
                }

                const location = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High,
                });

                setLocation(location);
                
                const region = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.15
                };
                
                setInitialRegion(region);
                
            } catch (error) {
                setErrorMsg('Failed to get location');
            }
        }

        getCurrentLocation();
    }, []);

    return { location, initialRegion, errorMsg };
}