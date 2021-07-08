import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import * as React from 'react';
import {StyleSheet,} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

const HeaderComponent = () => {


    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#FFF" barStyle="light-content"/>

            <Box safeAreaTop backgroundColor="#FFF"/>

            <HStack bg='#FFF' px={1} py={3} justifyContent='space-between' alignItems='center'>
                <HStack style={styles.hstack} space={4} alignItems='center'>
                    <Text color="black" fontSize={30} fontWeight='bold'>Welcome Back</Text>
                </HStack>
            </HStack>
        </NativeBaseProvider>

    );
}

const styles = StyleSheet.create(
    {
        header: {
            backgroundColor: '#002430',
            borderColor: '#FF0000',
        },
        hstack: {
            marginLeft: 15
        }

    }
    )
;
export default HeaderComponent;