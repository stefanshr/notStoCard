import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component, useState} from 'react';
import {MaterialIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import StartPage from "./StartPage";
import UserPage from "./UserPage";
import CreatePage from "./CreatePage";

export default function Navigationbar() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#00ADB5',
            inactiveTintColor: '#000000',
        }}>
            <Tab.Screen name="Home" component={StartPage}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="ios-home-outline" size={size} color={color}/>
                            )
                        }
                        }
            />
            <Tab.Screen name="Create" component={CreatePage}
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
    );
}