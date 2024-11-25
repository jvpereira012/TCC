import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Boasvindas from '../pages/boas-vindas';
import Boasvindas2 from '../pages/boas-vindas2';
import Boasvindas3 from '../pages/boas-vindas3';
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Redefinicao from "../pages/redefinicao";
import Home from "../pages/home";
import Informacoes from "../pages/informacoes";
import Graficos from "../pages/grafico";
import Configuracoes from "../pages/configuracoes";
import Perfil from "../pages/perfil";
import FuncionamentoSensores from "../pages/infSensores";
import PrivacidadeeSeguranca from "../pages/Privacidade e segurança";
import TermosDeUso from "../pages/Termos de uso";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type StackNavigation = {
  Boasvindas: undefined;
  Boasvindas2: undefined;
  Boasvindas3: undefined;
  Login: undefined;
  Redefinicao: undefined;
  Cadastro: undefined;
  TabNavigator: undefined;
  Graficos: undefined;
  Perfil: undefined;
  infSensores: undefined;
  PrivacidadeeSeguranca: undefined;
  TermosdeUso: undefined;
}

type TabNavigation = {
  Home: undefined;
  Informacoes: undefined;
  Configuracoes: undefined;
}



export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#00bf63',
        borderTopColor: 'transparent',
        paddingBottom: 2,
        paddingTop: 5,
        height: 50
      },
      tabBarActiveTintColor: '#efebef',
    }}>

      <Tab.Screen
        name="MAPA"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" size={size} color={'#efebef'} />
          ),
          tabBarLabelStyle: { fontFamily: 'Lovelo', fontSize: 10, color: '#efebef' },
        }}
      />
      <Tab.Screen
        name="INFORMAÇÕES"
        component={Informacoes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-variant" size={size} color={'#efebef'} />
          ),
          tabBarLabelStyle: { fontFamily: 'Lovelo', fontSize: 10, color: '#efebef' },
        }}
      />
      <Tab.Screen
        name="CONFIGURAÇÕES"
        component={Configuracoes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color={'#efebef'} />
          ),
          tabBarLabelStyle: { fontFamily: 'Lovelo', fontSize: 10, color: '#efebef' },
        }}
      />
    </Tab.Navigator>
  );
}


export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Boasvindas">
      <Stack.Screen
        name="Boasvindas"
        component={Boasvindas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Boasvindas2"
        component={Boasvindas2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Boasvindas3"
        component={Boasvindas3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Redefinicao"
        component={Redefinicao}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Graficos"
        component={Graficos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="infSensores"
        component={FuncionamentoSensores}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrivacidadeeSeguranca"
        component={PrivacidadeeSeguranca}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermosdeUso"
        component={TermosDeUso}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
