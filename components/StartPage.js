import React, {Component, useState, useEffect} from 'react';
import HeaderComponent from './HeaderComponent';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FlatList} from "native-base";
import Card from "./Card";



const Startpage = (props) => {
    useEffect(() => {
        console.log("inner")
        console.log(JSON.stringify(props.route.params.cardItems))
        console.log("inne2r")
    },[props.route.params.cardItems]);

    // const cardItems = props.route.params.cardItems;
    // const setCardItems = props.route.params.setCardItems;



    return (
        <>
            <HeaderComponent/>
            <FlatList
                data={props.route.params.cardItems}
                numColumns={2}
                renderItem={({item}) => (<Card item={item} navigation={props.navigation} cardItems={props.route.params.cardItems}/>)}
                keyExtractor={item => item.id}
            />
        </>
    );
}

export default Startpage;