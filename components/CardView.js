import React, {Component, useState} from 'react';
import {Text} from "react-native";
import Barcode from "react-native-barcode-builder";


const UserPage = ({route}) => {
    return (
        <>
            <Text> {route.params.name} </Text>
            <Text> {route.params.barcode} </Text>
            <Barcode value="Hello World" format="CODE128"/>
        </>
    );
}
export default UserPage;
