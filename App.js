import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Navigationbar from "./components/Navigationbar";
import {NavigationContainer} from "@react-navigation/native";
import Startpage from "./components/StartPage";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";


export default function App() {

    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Navigationbar/>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
