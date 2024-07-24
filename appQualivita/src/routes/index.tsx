import { createStackNavigator } from "@react-navigation/stack";
import Boasvindas from '../pages/boas-vindas';
import Boasvindas2 from '../pages/boas-vindas2';
import Boasvindas3 from '../pages/boas-vindas3';
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";


const Stack = createStackNavigator();

export default function Routes (){
  return(
    <Stack.Navigator initialRouteName="Boasvindas">
      <Stack.Screen
        name = "Boasvindas"
        component={Boasvindas}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name = "Boasvindas2"
        component={Boasvindas2}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name = "Boasvindas3"
        component={Boasvindas3}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name = "Login"
        component={Login}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name = "Cadastro"
        component={Cadastro}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}