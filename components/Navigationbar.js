import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component, useState} from 'react';
import {MaterialIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import StartPage from "./StartPage";
import UserPage from "./UserPage";
import CreatePage from "./CreatePage";
import {createStackNavigator} from "@react-navigation/stack";
import CardView from "./CardView";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigationbar({cardItems, setCardItems}) {


    return (
    <>


        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#00ADB5',
            inactiveTintColor: '#000000',
        }}>
            <Tab.Screen name="Home" component={() =>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={StartPage} initialParams={{cardItems: cardItems, setCardItems: setCardItems}}
                                  options={{
                                      headerShown: false}
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
                    <Stack.Screen name="Create" component={CreatePage} initialParams={{cardItems: cardItems, setCardItems: setCardItems}}
                                  options={{
                                      headerShown: false}
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