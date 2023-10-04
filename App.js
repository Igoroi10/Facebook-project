import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import styled from 'styled-components/native'
import 'react-native-gesture-handler'

import {MaterialCommunityIcons} from '@expo/vector-icons'

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Header from './components/Header.js';
import Home from './screens/Home.js';
import Friends from './screens/Friends.js';
import Groups from './screens/Groups.js';
import Profile from './screens/Profile.js';
import Notifications from './screens/Notificatinos.js';
import Menu from './screens/Menu.js';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
    <StatusBar
      backgroundColor='#FFFFFF'
      barStyle='dark-content'
      />
      <ScrollView style={{flex: 1, maxHeight: "10%"}}>
        <Header/>
      </ScrollView>
      <NavigationContainer>
        <Tab.Navigator          
          options={
            {
              tabBarActiveTintColor: "#3a86e9",
              tabBarInactiveTintColor: "#9f9f9f",
              tabBarShowLabel: false,
              tabBarShowIcon: true,
              swipeEnabled: true,
            }
          }
          screenOptions={({route})=> ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === 'Home') iconName = 'home'
              else if(route.name === 'Friends') iconName = 'account-multiple-outline'
              else if(route.name === 'Groups') iconName = 'account-group'
              else if(route.name === 'Profile') iconName = 'account-circle-outline'
              else if(route.name === 'Notifications') iconName = 'bell-outline'
              else if(route.name === 'Menu') iconName = 'menu'
              return <MaterialCommunityIcons name={iconName} size={26} color={color}/>
            },
          })}
          >
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Friends' component={Friends}/>
          <Tab.Screen name='Groups' component={Groups}/>
          <Tab.Screen name='Profile' component={Profile}/>
          <Tab.Screen name='Notifications' component={Notifications}/>
          <Tab.Screen name='Menu' component={Menu}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    marginBottom: 0,
    flex: 1,
  }
});