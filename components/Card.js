import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import center from "native-base/src/theme/components/center";
import {Alata_400Regular, useFonts} from '@expo-google-fonts/alata'
import AppLoading from "expo-app-loading";


const Card = (props) => {

    let [fontsLoaded] = useFonts({
        Alata_400Regular
    });

    const navigateTo = () => {
        props.navigation.navigate('CardView', {name: props.cardItems[props.item.id].name});
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (

        <TouchableOpacity onPress={navigateTo} style={styles.touch}>
            <View>
                <Text style={styles.card}>{props.cardItems[props.item.id].name.charAt(0)}</Text>
            </View>
        </TouchableOpacity>
    );

}
const styles = StyleSheet.create(
    {
        card: {
            fontSize: 35,
            textAlign: 'center',
            fontFamily: 'Alata_400Regular',
            marginTop: 27,

        },
        touch: {
            backgroundColor: 'rgba(0,24,24,0.08)',
            height: 100,
            width: 175,
            margin: 10,
            marginBottom: 25,
            borderRadius: 15,
            shadowColor: 'rgba(0,0,0,0.14)', // IOS
            shadowOffset: { height: 5, width: 5 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
        }


    }
    )
;
export default Card;
