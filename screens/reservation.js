import React from 'react'
import { Component , useState} from 'react'
import { View, Text, Image, ScrollView, Modal, TouchableOpacity, StyleSheet, ScrollViewBase, Dimensions, FlatList, Animated, ImageBackground, Button, Pressable } from 'react-native'
import IconMat from 'react-native-vector-icons/Entypo'
import * as Linking from 'expo-linking';
const images = [
    'https://images-na.ssl-images-amazon.com/images/I/81rxryurd3L.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41GMu1OBEgL._SX366_BO1,204,203,200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61n7TaqO45L._SX373_BO1,204,203,200_.jpg','https://5.imimg.com/data5/RU/UB/GLADMIN-4755675/chemical-engineering-500x500.png',
    'https://i.imgur.com/ETrZl7a.jpg',
    'https://www.cl.cam.ac.uk/~rja14/Papers/book2coverlarge.jpg',
    'https://tiimg.tistatic.com/fp/1/001/605/engineering-books-564.jpg?tr=n-w341'
]


const images2 = [
  'https://static.wixstatic.com/media/505d79_326114aea8bb46058145e6224f186fb7~mv2.jpg/v1/fill/w_246,h_341,al_c,lg_1,q_80/505d79_326114aea8bb46058145e6224f186fb7~mv2.webp',
  'https://5.imimg.com/data5/YM/BK/GLADMIN-4755675/civil-engineering-book-500x500.png',
  'https://3.imimg.com/data3/FU/AS/MY-9192352/electronics-engineering-books-500x500.jpg'
]


const {width, height} = Dimensions.get('window');

const reservationText = [
    'Principles of Electrical Engineering',
    'Introduction to Mechanical Engineering',
    'Advanced Software Engineering'
  ]

const image2 = ['https://previews.123rf.com/images/photoauris/photoauris1607/photoauris160700017/62114655-empty-book-shelf-on-wooden-wall.jpg']


const Reservations  = ({navigation}) =>
{
    const [view, setView] = useState(false);

    const handleonClick1 = () =>
    {
        setView(true);
    };

    const handleonClick2 = () =>
    {
        setView(false);
    };

    return(
            <View>
                <Text style = {{fontSize:25, fontWeight:'700', marginLeft:100, marginTop:40}}>Your Reservations</Text>
                <ScrollView pagingEnabled  horizontal showsHorizontalScrollIndicator = {false} style = {styles.scroll}>
                   {/* <ImageBackground source = {{uri:'https://previews.123rf.com/images/photoauris/photoauris1607/photoauris160700017/62114655-empty-book-shelf-on-wooden-wall.jpg'}}/> */}
                   <Text style = {{marginTop:260,marginLeft:40, fontWeight:'bold', fontSize:15,  position : 'absolute'}}>Renew Days - 10</Text>
                   <Text style = {{marginTop:260,marginLeft:235, fontWeight:'bold', fontSize:15, position:'absolute'}}>Renew Days - 7</Text>
                   <Text style = {{marginTop:260,marginLeft:420, fontWeight:'bold', fontSize:15, position:'absolute'}}>Renew Days - 5</Text>
                   <Text style = {{marginTop:260,marginLeft:600, fontWeight:'bold',  fontSize:15, position:'absolute'}}>Renew Days - 8</Text>
                   <Text style = {{marginTop:260,marginLeft:790, fontWeight:'bold',  fontSize:15, position:'absolute'}}>Renew Days - 2</Text>
                   <Text style = {{marginTop:260,marginLeft:970, fontWeight:'bold', fontSize:15, position:'absolute'}}>Renew Days  - 7</Text>
                   <Text style = {{marginTop:260,marginLeft:1160, fontWeight:'bold', fontSize:15, position:'absolute'}}>Renew Days - 4</Text>
                   {images.map((image, index) =>
        (
          <Image key = {index} source = {{uri: image}} style = {styles.slider}/>
        ))
        }
        </ScrollView>
        <View style = {{flexDirection:'row', alignSelf:'center', position:'absolute', bottom:-15, alignContent:'space-between',  marginTop:20}}>
          
        </View>
          <View>
            <Text style = {{fontSize:25, fontWeight:'700', marginTop:10, marginLeft:120, position:'absolute'}}>Books Overdue</Text>
            <ScrollView pagingEnabled  horizontal showsHorizontalScrollIndicator = {false} style = {{marginTop:40}}>
                   {/* <ImageBackground source = {{uri:'https://previews.123rf.com/images/photoauris/photoauris1607/photoauris160700017/62114655-empty-book-shelf-on-wooden-wall.jpg'}}/> */}
                   <Pressable style = {styles.login_button}>
                    <Text style = {styles.logintext}>Pay Dues</Text>
                </Pressable>
                <Pressable style = {styles.login_button2} onPress = {handleonClick1} >
                    <Text style = {styles.logintext}>Pay Dues</Text>
                </Pressable>
                <Pressable style = {styles.login_button3}  >
                    <Text style = {styles.logintext}>Pay Dues</Text>
                </Pressable>
                   {images2.map((image, index) =>
        (
          <Image key = {index} source = {{uri: image}} style = {styles.slider}/>
        ))
        }
        </ScrollView>
        < Modal transparent = {true} visible = {view}>
          <View style = {{backgroundColor:'#000000aa', flex:1}}>
            <View style = {{backgroundColor:'#ffffff', margin:40, padding:30, height:420, marginTop:250, borderRadius:15}}>
              <Image  style = {{width:100, height:130, marginTop:10, marginLeft:1}} source = {{uri:'https://static.wixstatic.com/media/505d79_326114aea8bb46058145e6224f186fb7~mv2.jpg/v1/fill/w_246,h_341,al_c,lg_1,q_80/505d79_326114aea8bb46058145e6224f186fb7~mv2.webp'}}/>
              <IconMat  style = {{marginLeft:250, marginTop:-150, fontSize:25}} name = "cross" onPress = {handleonClick2}/>
              <Text style = {{fontSize:19, marginTop:140}}>Title :</Text>
              <Text style = {{fontSize:14, marginTop:5, color:'#696969'}}>Motor Engineering Knowledge</Text>
              <Text style = {{fontSize:19, marginTop:20}}>Days borrowed :</Text>
              <Text style = {{fontSize:14, marginTop:5, color:'#696969'}}>10</Text>
              <Text style = {{fontSize:19, marginTop:20}}>Fine Amount :</Text>
              <Text style = {{fontSize:14, marginTop:5, color:'#696969'}}>Rs 150</Text>
              <Pressable style={styles.button_2} onPress = {() => Linking.openURL('https://pay.google.com/intl/en_in/about/')} >
      <Text style={styles.text_2}>Pay Now</Text>
    </Pressable>
          </View>
          </View>
        </Modal>
          </View>
            </View>
        )}

export default Reservations;

const styles = StyleSheet.create(
    {
        slider:{
            resizeMode:'contain',
            height: 250,
            width: 150,
            marginBottom:20,
            borderColor:'#000000',
            borderRadius:5,
            marginTop:20,
            marginLeft:-5,
            marginLeft:20,
            marginBottom:35, marginRight:15,
          },
          slider2:
          {
            resizeMode:'contain',
            height: 220,
            width: 150,
            marginBottom:20,
            borderColor:'#000000',
            borderRadius:5,
            marginTop:20,
            marginLeft:-5,
            marginLeft:20,
            marginBottom:75, marginRight:15,
          },
          button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 9,
            elevation: 0,
            backgroundColor: 'white',
            width:144,
            height:40,
            borderColor:'#20b2aa',
            position:'absolute',
            borderWidth:1,
            marginTop:265,
            marginLeft:25
          },
          text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color:'#20b2aa', 
            position:'absolute'
          },
          button2:
          {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 9,
            elevation: 0,
            backgroundColor: 'white',
            width:144,
            height:40,
            borderColor:'#20b2aa',
            position:'absolute',
            borderWidth:1,
            marginTop:265,
            marginLeft:210
          },
          button3:
          {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 9,
            elevation: 0,
            backgroundColor: 'white',
            width:144,
            height:40,
            borderColor:'#20b2aa',
            position:'absolute',
            borderWidth:1,
            marginTop:265,
            marginLeft:395
          },
          login_button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 3,
            elevation: 0,
            backgroundColor: 'aquamarine',
            width:125,
            height:35,
            borderColor:'#20b2aa',
            borderWidth:1,
            marginTop:260,
            elevation:5,
            shadowRadius:1,
            marginLeft:220,
            position : 'absolute'
        },
        logintext:
        {
            fontSize: 14,
            lineHeight: 20,
            fontWeight:'bold',
            letterSpacing: 0.25,
            color:'#000000',
            marginTop:50,
            position:'absolute'
        },
        login_button2: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderRadius: 3,
          elevation: 0,
          backgroundColor: 'aquamarine',
          width:120,
          height:35,
          borderColor:'#20b2aa',
          borderWidth:1,
          marginTop:260,
          elevation:5,
          shadowRadius:1,
          marginLeft:30,
          position : 'absolute'
      },
      login_button3: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 3,
        elevation: 0,
        backgroundColor: 'aquamarine',
        width:120,
        height:35,
        borderColor:'#20b2aa',
        borderWidth:1,
        marginTop:260,
        elevation:5,
        shadowRadius:1,
        marginLeft:405,
        position : 'absolute'
    },
    button_2: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 3,
      elevation: 0,
      backgroundColor: 'aquamarine',
      width:125,
      height:35,
      borderColor:'#20b2aa',
      borderWidth:1,
      marginTop:90,
      elevation:5,
      shadowRadius:1,
      marginLeft:165,
      position : 'absolute'
    },
    text_2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight:'bold',
      letterSpacing: 0.25,
      color:'#000000',
      marginTop:50,
      position:'absolute'
    }
          
    }
)
