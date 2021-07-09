import React, {Component, useState} from 'react';
import {Share, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Entypo} from '@expo/vector-icons';

import Barcode from 'react-native-barcode-svg';

const UserPage = ({route}) => {

    const format = route.params.card.format.split('.')
    const sanatized = format[format.length - 1].toString().replace("-", "").toUpperCase();
    const text = route.params.card.barcode;
    console.log(sanatized);

    const onShare = async () => {
        try {
            const result = await Share.share({
                 message:
                    'Add this barcode to your wallet! ' + JSON.stringify(route.params.card.barcode),

            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {

                } else {

                }
            } else if (result.action === Share.dismissedAction) {

            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <Text> {route.params.card.name} </Text>
            <Text style={styles.code}><Barcode value={route.params.card.barcode} format={sanatized}/> </Text>

            <TouchableOpacity onPress={onShare}>
                <Entypo name="share-alternative" size={24} color="black"/>
            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    code: {
        marginLeft: 20,
    }
})
export default UserPage;
