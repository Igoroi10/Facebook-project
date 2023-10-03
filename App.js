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
      <ScrollView>
        <Header/>
      </ScrollView>
      <NavigationContainer>
        <Tab.Navigator
          swipeEnabled='true'
          tabBarOptions=
          screenOptions={{
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === 'Home') iconName = 'home'
              else if(route.name === 'Friends') iconName = 'account-multiple-cutline'
              else if(route.name === 'Profile') iconName = 'account-group'
              else if(route.name === 'Profile') iconName = 'account-group'
              else if(route.name === 'Profile') iconName = 'account-group'
              else if(route.name === 'Profile') iconName = 'account-group'
              return <MaterialCommunityIcons name={iconName} size={26} color={color}/>
            },
          }}>

          </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
