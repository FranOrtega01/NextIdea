import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Main} from './src/Main'

export default function App() {
  return (
  <>
    <StatusBar style="dark" />
    <Main />
  </> 
  );
}