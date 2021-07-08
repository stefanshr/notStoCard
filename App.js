import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Navigationbar from "./components/Navigationbar";
import {NavigationContainer} from "@react-navigation/native";
import Startpage from "./components/StartPage";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";


export default function App() {
    const [cardItems, setCardItems] = useState([]);

    useEffect(() => {
        setCardItems([
            {
                id: 0,
                name: 'Migos',
                barcode: ''
            },
            {
                id: 1,
                name: 'Coop',
                barcode: ''
            },
            {
                id: 2,
                name: 'Brack',
                barcode: ''
            },
            {
                id: 3,
                name: 'TCS',
                barcode: ''
            },
            {
                id: 4,
                name: 'Digitec',
                barcode: ''
            },
            {
                id: 5,
                name: 'Whatsapp',
                barcode: ''
            },
        ])
    }, [])

    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Navigationbar cardItems={cardItems} setCardItems={setCardItems}/>
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
