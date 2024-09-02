import { StyleSheet, SafeAreaView, Image } from 'react-native';
import {getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject, watchPositionAsync, LocationAccuracy} from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);
  async function requestLocationPermissions(){

    const {granted} = await requestForegroundPermissionsAsync();
    if(granted){
       const currentposition =await getCurrentPositionAsync();
       setLocalizacao(currentposition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1300,
      distanceInterval: 1
    }, (resposta) => {
      setLocalizacao(resposta);
    })
  }, []);

    return (
      <SafeAreaView style={styles.container}>
       { 
        localizacao &&
          <MapView 
            style={styles.map}
            initialRegion={{
              latitude: localizacao.coords.latitude,
              longitude: localizacao.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            >
              <Marker
                coordinate={{
                  latitude: localizacao.coords.latitude,
                  longitude: localizacao.coords.longitude,
                }}
              >              
                <SafeAreaView style={styles.markerContainer}>
                  <Image
                    source={require('../../../assets/iconeseimagens_app/icon1.png')}
                  />
                </SafeAreaView>
              </Marker>
          </MapView>
        }
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    flex: 1,
    width: '100%',
  },
  markerContainer: {
    height: 34,
    width: 45,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 0
  }
})