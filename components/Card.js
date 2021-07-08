import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const Card = (props) => {


    return (
        <TouchableOpacity>
            <View >
                <Text style={styles.card}>{props.cardItems[props.item.id].name}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create(
    {
        card: {
            fontSize: 40
        }

    }
    )
;
export default Card;