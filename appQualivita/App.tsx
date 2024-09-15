import React from "react";
import { StatusBar } from "react-native";
import {useFonts} from 'expo-font';

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";


export default function App(){
    const [fontsLoaded] = useFonts({
        "Lovelo": require("./assets/fonts/Lovelo-Black.ttf"),
        "Poppins": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf")
    });

    if(!fontsLoaded) {
        return null;
    }
    return(
        <NavigationContainer>
            <StatusBar backgroundColor="#00bf63" barStyle="light-content" />
            <Routes />
        </NavigationContainer>
    )
}




