import { StatusBar } from 'expo-status-bar';
import React, { Component , state} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground, Image, ScrollView,Button, Pressable,  Dimensions, useState } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'

const {width} = Dimensions.get('window');
const height = width*100/60;

const image2 = ['https://previews.123rf.com/images/photoauris/photoauris1607/photoauris160700017/62114655-empty-book-shelf-on-wooden-wall.jpg']

const images = [
  'https://images-na.ssl-images-amazon.com/images/I/41PK6LS1NqL.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/6136EIAR46L.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/51yC0ZBWVWL._SX353_BO1,204,203,200_.jpg'
]

const images2 = [
  'https://images-na.ssl-images-amazon.com/images/I/81rxryurd3L.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/41GMu1OBEgL._SX366_BO1,204,203,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/61n7TaqO45L._SX373_BO1,204,203,200_.jpg'
]

const reservationText = [
  'Principles of Electrical Engineering',
  'Introduction to Mechanical Engineering',
  'Advanced Software Engineering'
]


const RVLIB = ({navigation}) =>
{
  return(
    <View>
      {/*<View style = {styles.view}>
        <Text style = {styles.header}>RVLIB</Text>
  </View>*/}
      <Text style = {styles.subhead}>New Arrivals !</Text>
      <View style = {styles.sliderview}>
        <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator = {false} style = {styles.scroll}>
        {images.map((image, index) =>
        (
          <Image key = {index} source = {{uri: image}} style = {styles.slider}/>
        ))
        }
        </ScrollView>
        <View style = {{flexDirection:'row', alignSelf:'center', position:'absolute', bottom:-15}}>
          {images.map((i,k) =>
          (
            <Text style = {styles.notactive} key = {k}>⬤</Text> 
          ))
          }
        </View>
      </View>
      <Text style = {styles.reserve}>Your Reservations</Text>
      <View>
        {images2.map((image, index) =>
        (
          <Image key = {index} source = {{uri:image}} style = {styles.reserveimage}/>
        ))
        }
      </View>
      <View style = {{width:210, marginTop:60, marginLeft:110, color: '#7fffd4'}}>
      <Pressable style={styles.button} onPress = {() => {
        navigation.navigate('Reservations')}}>
      <IconMat style = {{fontSize:23 , color:'lightseagreen', marginLeft:-190}} name = {"bookshelf"}/>
      <Text style={styles.text}>Your Reservations</Text>
    </Pressable>
      </View>
      <View style = {{marginTop:-262, marginLeft:85}}>
        <Text style = {{fontSize:15, marginTop:-10}}>Civil Engineering 2020</Text>
        <Text style = {{fontSize:10}}>Review Days Left - 10</Text>
        <Text>___________________________________</Text>
        <Text style = {{fontSize:15, marginTop:18}}>Objective Mechanical Engineering</Text>
        <Text style = {{fontSize:10}}>Review Days Left - 7</Text>
        <Text style = {{opacity:0.7}}>___________________________________</Text>
        <Text style = {{fontSize:15, marginTop:13}}>Software Engineering</Text>
        <Text style = {{fontSize:10}}>Review Days Left - 5</Text>
      </View>
    </View>
  )
}

export default RVLIB;

const styles = StyleSheet.create({
  header:{
    justifyContent: 'center',
    marginTop:50,
    fontSize:20,
    marginLeft: 90,


  },
  view:
  {
    backgroundColor:'#7fffd4',
    height:100

  },
  subhead:
  {
    fontSize:20,
    marginTop:50,
    marginLeft:30,
    fontWeight:'700'
  },
  sliderview:{
    marginTop:15,
    width :width,
    height: 250
  },
  slider:{
    resizeMode:'contain',
    height: 215,
    width: width,
    marginBottom:20,
    borderColor:'#000000',
    borderRadius:4
  },
  scroll:
  {
    width:width,
    height:height,
    marginTop:20
  },
  reserve:
  {
    fontSize:20,
    marginTop:30,
    marginBottom:20,
    marginLeft:30
  },
  reserveimage:
  {
    width:40,
    height:40,
    marginLeft:30,
    marginTop:11,
    marginBottom:20,
    flexDirection: 'column',
    borderRadius:60
  },
  active:
  {
    color:'#f0f8ff'
  },
  notactive:
  {
    color:'#000000',
    marginLeft:5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 9,
    elevation: 0,
    backgroundColor: 'white',
    width:220,
    height:40,
    borderColor:'#20b2aa',
    marginLeft:-20,
    borderWidth:1,
    marginTop:-35
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color:'#20b2aa', 
    position:'absolute'
  }
});
