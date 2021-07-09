import React, {Component, useState, useEffect} from 'react';
import HeaderComponent from './HeaderComponent';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FlatList} from "native-base";
import Card from "./Card";



const Startpage = (props) => {

    const [cards, setCards] = useState(props.cardItems);

    useEffect(() => {
        console.log(props.cardItems)
        setCards(props.cardItems);
    },[props.cardItems]);


    useEffect(() => {
    },[cards])



    // const cardItems = props.route.params.cardItems;
    // const setCardItems = props.route.params.setCardItems;



    return (
        <>
            <HeaderComponent/>
            <FlatList
                data={props.cardItems}
                numColumns={2}
                renderItem={({item}) => (<Card item={item} navigation={props.navigation}/>)}
                keyExtractor={item => item.id}
            />
        </>
    );
}

export default Startpage;