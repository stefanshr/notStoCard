import React, {Component, useState} from 'react';
import {Text} from "react-native";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

import Barcode from 'react-native-barcode-svg';

const UserPage = ({route}) => {

    const format = route.params.card.format.split('.')
    const sanatized = format[format.length - 1].toString().replace("-", "").toUpperCase();
    console.log(sanatized);

    return (
        <>
            <Text> {route.params.card.name} </Text>
            <Text><Barcode value={route.params.card.barcode} format={sanatized}/> </Text>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default UserPage;
