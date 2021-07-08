import React, {Component, useState, useEffect} from 'react';
import HeaderComponent from './HeaderComponent';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FlatList} from "native-base";
import Card from "./Card";


const Startpage = () => {

    const [cardItems, setCardItems] = useState([]);

    useEffect(() => {
        setCardItems([
            {
                id: 0,
                name: 'Migros'
            },
            {
                id: 1,
                name: 'Coop'
            }, {
                id: 2,
                name: 'Brack'
            },
            {
                id: 3,
                name: 'TCS'
            }, {
                id: 4,
                name: 'Digitec'
            },
            {
                id: 5,
                name: 'Whatsapp'
            },
        ])
    }, [])


    return (
        <>
            <HeaderComponent/>
            <FlatList
                data={cardItems}
                numColumns={2}
                renderItem={({item}) => (<Card item={item} cardItems={cardItems}/>)}
                keyExtractor={item => item.id}
            />
        </>
    );
}

export default Startpage;