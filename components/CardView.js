import React, {Component, useState} from 'react';
import {Text} from "react-native";


const UserPage = ({route}) => {
    return (
        <>
        <Text> {route.params.name} </Text>
        <Text> {route.params.barcode} </Text>
        </>
    );
}
export default UserPage;