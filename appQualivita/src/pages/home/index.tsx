import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject, watchPositionAsync, LocationAccuracy } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const translateYAnim = useRef(new Animated.Value(300)).current; // Começa fora da tela

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocalizacao(currentPosition);
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
    });
  }, []);

  const toggleInfoBox = () => {
    setShowInfo(!showInfo);
    Animated.timing(translateYAnim, {
      toValue: showInfo ? 300 : 60, // 60 é a nova altura da caixa
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

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
            onPress={toggleInfoBox}
          >
            <Image
              source={require('../../../assets/iconeseimagens_app/icon1.png')}
              style={{ width: 25, height: 35, resizeMode: 'stretch' }}
            />
          </Marker>
        </MapView>
      }

      <Animated.View style={[styles.infoBox, { transform: [{ translateY: translateYAnim }] }]}>
        <Text style={styles.infoTitulo}>Informações do sensor</Text>
        <Text style={styles.infoText}>Temperatura no ambiente: 26°</Text>
        <Text style={styles.infoText}>umidade na área: 40%</Text>
        <Text style={styles.infoText}>condição do ar: boa</Text>
        <TouchableOpacity onPress={toggleInfoBox}>
          <Text style={styles.closeButton}>Fechar</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  infoBox: {
    position: 'absolute',
    bottom: 80, // Deixando um espaço acima da parte inferior da tela
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#efebef',
    borderRadius: 8,
    elevation: 5,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 2,
    fontFamily: "Lovelo",
    color:"#00bf63"
  },
  infoTitulo: {
    fontSize: 16,
    marginVertical: 2,
    textAlign:"center",
    fontFamily: "Lovelo",
    marginBottom:15
  },
  closeButton: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});
