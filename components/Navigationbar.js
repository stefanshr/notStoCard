import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component, useEffect, useState} from 'react';
import {MaterialIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import StartPage from "./StartPage";
import UserPage from "./UserPage";
import CreatePage from "./CreatePage";
import {createStackNavigator} from "@react-navigation/stack";
import CardView from "./CardView";
import Startpage from "./StartPage";

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
    ])

    const StartPageComponent = (props) => (
        <StartPage
            cardItems={cardItems}
            setCardItems={setCardItems}
            navigation={props.navigation}
        />
    )

    const StartPageView = (props) => (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={StartPageComponent}
                          initialParams={{cardItems: cardItems, setCardItems: setCardItems}}
                          options={{
                              headerShown: false,
                          }
                          }/>
            <Stack.Screen name="CardView" component={CardView}/>
        </Stack.Navigator>
    )

    const CreateView = () => (
        <Stack.Navigator>
            <Stack.Screen name="Create" component={CreatePage}
                          initialParams={{cardItems: cardItems, setCardItems: setCardItems}}
                          options={{
                              headerShown: false
                          }
                          }/>
        </Stack.Navigator>
    )


    useEffect(() => {
        // console.log('Nav')
        // console.log(cardItems)
    },[cardItems, setCardItems])

    return (
        <>


            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#00ADB5',
                inactiveTintColor: '#000000',
            }}>
                <Tab.Screen name="Home" component={StartPageView}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <Ionicons name="ios-home-outline" size={size} color={color}/>
                                )
                            }
                            }
                />
                <Tab.Screen name="Create" component={CreateView}
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
