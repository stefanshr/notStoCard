import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import center from "native-base/src/theme/components/center";

const Card = (props) => {

    const navigateTo = () => {
        props.navigation.navigate('CardView', {name: props.cardItems[props.item.id].name});
    }


    return (
        <TouchableOpacity onPress={navigateTo}>
            <View >
                <Text style={styles.card}>{props.cardItems[props.item.id].name}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create(
    {
        card: {
            fontSize: 30,
            padding: 30,
            backgroundColor: 'grey',
            height: 100,
            width: 200,


        }

    }
    )
;
export default Card;