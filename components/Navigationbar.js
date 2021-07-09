import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component, useEffect, useState} from 'react';
import {MaterialIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import StartPage from "./StartPage";
import UserPage from "./UserPage";
import CreatePage from "./CreatePage";
import {createStackNavigator} from "@react-navigation/stack";
import CardView from "./CardView";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigationbar(props) {

    const [cardItems, setCardItems] = useState([
        {
            id: 0,
            name: 'Migos',
            barcode: '243324',
            format: 'CODE39'
        },
        {
            id: 1,
            name: 'Coop',
            barcode: '',
            format: ''
        },
        {
            id: 2,
            name: 'Brack',
            barcode: '',
            format: ''
        },
        {
            id: 3,
            name: 'TCS',
            barcode: '',
            format: ''
        },
        {
            id: 4,
            name: 'Digitec',
            barcode: '',
            format: ''
        },
        {
            id: 5,
            name: 'Whatsapp',
            barcode: '',
            format: ''
        },
    ])


    useEffect(() => {
        console.log(cardItems[cardItems.length-1])
    },[cardItems, setCardItems])

    return (
        <>


            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#00ADB5',
                inactiveTintColor: '#000000',
            }}>
                <Tab.Screen name="Home" component={() =>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={StartPage}
                                      initialParams={{cardItems: cardItems, setCardItems: setCardItems}}
                                      options={{
                                          headerShown: false,
                                      }
                                      }/>
                        <Stack.Screen name="CardView" component={CardView}/>
                    </Stack.Navigator>
                }
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <Ionicons name="ios-home-outline" size={size} color={color}/>
                                )
                            }
                            }
                />
                <Tab.Screen name="Create" component={() =>
                    <Stack.Navigator>
                        <Stack.Screen name="Create" component={CreatePage}
                                      initialParams={{cardItems: cardItems, setCardItems: setCardItems}}
                                      options={{
                                          headerShown: false
                                      }
                                      }/>
                    </Stack.Navigator>
                }
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <MaterialIcons name="add-a-photo" size={size} color={color}/>
                                ),
                            }
                            }/>
                <Tab.Screen name="User" component={UserPage}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <AntDesign name="user" size={size} color={color}/>
                                )
                            }
                            }/>
            </Tab.Navigator>
        </>
    );
}
