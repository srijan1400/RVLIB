import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground, Image, ScrollView,Button, Pressable,  Dimensions, useState, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

export default function Loading({ navigation }) {

  useEffect(
    () => {
     firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         navigation.replace('RVLIB');
       } else {
         navigation.replace('Login');
       }
     });
   }
 );




    return (
      <View style = {{justifyContent:'center', flex:1}}>
        <ActivityIndicator size='large' color = "#0000ff" />
      </View>
    );
  }