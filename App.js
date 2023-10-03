import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import styled from 'styled-components/native'
import 'react-native-gesture-handler'

import Header from './components/Header.js';

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
