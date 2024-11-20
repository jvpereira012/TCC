import { StyleSheet, SafeAreaView, Text, Image, TouchableWithoutFeedback, TouchableOpacity, Animated, Easing } from 'react-native';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject, watchPositionAsync, LocationAccuracy } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState, useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { db } from '../../services/firebaseConfigs';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export default function Home() {
  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  let [estado, setEstado] = useState('');
  let [cor, setCor] = useState('#00bf63');
  const [showInfo, setShowInfo] = useState(false);
  let [temp, setTemp] = useState("Carregando...");
  let [umidade, setUmidade] = useState("Carregando...");
  const translateYAnim = useRef(new Animated.Value(300)).current;
  const mapRef = useRef<MapView>(null);

  // Estilo personalizado do mapa para remover os POIs
  const mapStyle = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ];

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
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1300,
        distanceInterval: 1,
      },
      (resposta) => {
        setLocalizacao(resposta);
      }
    );
  }, []);

  const getInf = async () => {
    try {
      const q = query(
        collection(db, 'sensores'),
        orderBy('horarioRegistro', 'desc'),
        limit(1)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        console.log(data);
        setTemp(data.temperatura);
        setUmidade(data.umidade);
        let co = data.infCO;
        if (co <= 9) {
          setCor('#4CAF50');
          setEstado('Boa');
        }
        else if (co > 9 && co <= 11) {
          setCor('#FFFF00');
          setEstado('Moderada');
        }
        else if (co > 11 && co <= 13) {
          setCor('#B22222');
          setEstado('Ruim')
        }
        else if (co > 13 && co <= 15) {
          setCor('#FF4500');
         
          setEstado('Muito ruim');
        }
        else if (co > 15) {
          setCor('#4B0082');
         
          setEstado('Péssima');
        }
      } else {
        console.log('Nenhum documento encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const toggleInfoBox = async () => {
    await getInf(); // Busca os dados do banco de dados antes de mostrar a caixa
    setShowInfo(!showInfo);
    Animated.timing(translateYAnim, {
      toValue: showInfo ? 300 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const closeInfoBox = () => {
    if (showInfo) {
      setShowInfo(false);
      Animated.timing(translateYAnim, {
        toValue: 300,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  };

  const centerToMyLocation = () => {
    if (localizacao && mapRef.current) {
      mapRef.current.animateCamera({
        center: {
          latitude: localizacao.coords.latitude,
          longitude: localizacao.coords.longitude,
        },
        zoom: 19,
      });
    }
  };

  const toggleMapType = () => {
    setMapType((prevType) => (prevType === 'standard' ? 'satellite' : 'standard'));
  };

  return (
    <TouchableWithoutFeedback onPress={closeInfoBox}>
      <SafeAreaView style={styles.container}>
        {
          localizacao &&
          <MapView
            ref={mapRef}
            style={styles.map}
            mapType={mapType}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              latitude: -23.239199295057237,
              longitude: -45.83663704633708,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            customMapStyle={mapStyle} // Adiciona o estilo personalizado para ocultar POIs
          >
            <Marker
              coordinate={{
                latitude: -23.239199295057237,
                longitude: -45.83663704633708,
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
          <Text style={styles.infoText}>Temperatura no ambiente: {temp}°C</Text>
          <Text style={styles.infoText}>Umidade na área: {umidade}%</Text>
          <Text style={styles.infoText}>Condição do ar: {estado}</Text>
        </Animated.View>

        {!showInfo && (
          <TouchableOpacity style={styles.myLocationButton} onPress={centerToMyLocation}>
            <Ionicons name="locate" size={24} color="#efebef" />
          </TouchableOpacity>
        )}

        {!showInfo && (
          <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
            <Ionicons name="layers-sharp" size={24} color="#efebef" />
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    backgroundColor: '#efebef',
    borderRadius: 10,
    elevation: 10,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 2,
    fontFamily: 'Lovelo',
    color: '#00bf63',
  },
  infoTitulo: {
    fontSize: 20,
    marginVertical: 2,
    textAlign: 'center',
    fontFamily: 'Lovelo',
    marginBottom: 15,
  },
  myLocationButton: {
    position: 'absolute',
    bottom: 85,
    right: 20,
    backgroundColor: '#00bf63',
    padding: 10,
    borderRadius: 100,
    elevation: 5,
  },
  mapTypeButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#00bf63',
    padding: 10,
    borderRadius: 100,
    elevation: 5,
  },
});
