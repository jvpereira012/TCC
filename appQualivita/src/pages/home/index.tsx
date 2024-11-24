import { StyleSheet, SafeAreaView, Text, Image, TouchableWithoutFeedback, TouchableOpacity, Animated, Easing } from 'react-native';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject, watchPositionAsync, LocationAccuracy } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState, useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { db } from '../../services/firebaseConfigs';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export default function Home() {
  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  let [estado, setEstado] = useState('');
  let [corTexto, setCorTexto] = useState('#00bf63');
  const [showInfo, setShowInfo] = useState(false);
  let [temp, setTemp] = useState("Carregando...");
  let [umidade, setUmidade] = useState("Carregando...");
  const translateYAnim = useRef(new Animated.Value(300)).current;
  const mapRef = useRef<MapView>(null);

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
        let co2 = data.infCO2;
        if (co2 >= 400 && co2 <= 750) {
          setCorTexto('#00bf63');
          setEstado('Boa');
        }
        else if (co2 > 750 && co2 <= 1200) {
          setCorTexto('#e8b501');
          setEstado('Média');
        }
        else if (co2 > 1200) {
          setCorTexto('#e61913');
          setEstado('Ruim')
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
            showsMyLocationButton={false}
            toolbarEnabled={false}
            initialRegion={
              localizacao && {
                latitude: localizacao.coords.latitude,
                longitude: localizacao.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }
            }            
            customMapStyle={mapStyle} 
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
          <Text style={{
              fontSize: 16,
              marginVertical: 2,
              fontFamily: 'Lovelo',
              color: corTexto
            }}>
            Condição do ar: {estado}</Text>
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

