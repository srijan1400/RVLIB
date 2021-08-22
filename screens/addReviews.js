import React from 'react'
import { useState, setState} from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity,  RecyclerViewBackedScrollView, Modal, TextInput, Linking} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';



const Add = ({navigation}) =>
{

    return(
        <View style = {{marginTop:60}}>
            <Text style = {{marginLeft:45, fontSize:25, fontWeight:'bold'}}>Title :</Text>
            <Text style = {{marginLeft:45, marginTop:10, fontSize:20}}>The Chemistry Book</Text>
            <Text style = {{marginLeft:45, fontSize:25, marginTop:30, fontWeight:'bold'}}>Author :</Text>
            <Text style = {{marginLeft:45 , marginTop:10, fontSize:20}}>Derek B Lowe</Text>
            <View style ={{marginTop: 45}}>
                <AirbnbRating 
                count = {5}
                reviews = {["Very Bad", "Not Helpful" , "Decent", "Good Book", "Must Read"]}
                defaultRating = {3}
                size = {30}/>
            </View>
            <View style = {{marginTop:35}}>
                <TextInput multiline style = {{width: 320, height:175, borderWidth:1, marginLeft:45, paddingLeft:25}} placeholder = "Add comments"/>
            </View>
            <Pressable style={styles.button} onPress = {() => {
        navigation.navigate('Reviews')}}>
      <Text style={styles.text}>Post Review</Text>
    </Pressable>
        </View>    
    )
}

export default Add;

const styles = StyleSheet.create({
    star:
    {
        paddingLeft:30,
        marginTop: 70,
        paddingRight:-40,
        paddingHorizontal:-30
    },
    text:
        {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color:'#000000',
            marginTop:50,
            position:'absolute'
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 3,
            elevation: 0,
            backgroundColor: 'aquamarine',
            width:170,
            height:40,
            borderColor:'#20b2aa',
            marginLeft: 120,
            borderWidth:1,
            marginTop:60,
            elevation:5,
            shadowRadius:5,
            shadowColor:'#000000'
        }
})