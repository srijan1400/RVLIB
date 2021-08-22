import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Home from './screens/home'
import Navigator from './routes/drawer'
import {firebaseConfig} from './config'
import firebase from 'firebase';
import "firebase/auth";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Constants } from 'expo-constants';

export default function App() {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <Navigator/>
  );
}



