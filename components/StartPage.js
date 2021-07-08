import React, {Component, useState, useEffect} from 'react';
import HeaderComponent from './HeaderComponent';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FlatList} from "native-base";
import Card from "./Card";



const Startpage = (props) => {

    useEffect(() => {
        console.clear();
        console.log(JSON.stringify(cardItems))
    },[])

    const cardItems = props.route.params.cardItems;
    const setCardItems = props.route.params.setCardItems;



    return (
        <>
            <HeaderComponent/>
            <FlatList
                data={cardItems}
                numColumns={2}
                renderItem={({item}) => (<Card item={item} navigation={props.navigation} cardItems={cardItems}/>)}
                keyExtractor={item => item.id}
            />
        </>
    );
}

export default Startpage;