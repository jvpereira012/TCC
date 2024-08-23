import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';

import Boasvindas from '../pages/boas-vindas';
import Boasvindas2 from '../pages/boas-vindas2';
import Boasvindas3 from '../pages/boas-vindas3';
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";
import Configuracoes from "../pages/configuracoes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type StackNavigation = {
  Boasvindas: undefined;
  Boasvindas2: undefined;
  Boasvindas3: undefined;
  Login: undefined;
  Cadastro: undefined;
  TabNavigator: undefined; 
}

type TabNavigation = {
  Home: undefined;
  Configuracoes: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:{
        backgroundColor: '#00bf63',
        borderTopColor: 'transparent',
        paddingBottom: 2,
        paddingTop: 5,
        height: 45
      },
      tabBarActiveTintColor: '#efebef',
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ 
          headerShown: false,
            tabBarIcon: ({color,size}) => (
              <AntDesign name="enviroment" size={size} color={color}/>
            )
        }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ 
          headerShown: false,
            tabBarIcon:({color,size}) => (
              <AntDesign name="setting" size={size} color={color}/>
            )
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
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
