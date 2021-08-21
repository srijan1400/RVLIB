import React from 'react'
import { useState, setState} from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity,  RecyclerViewBackedScrollView, TextInput, Modal} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';


const Reserve = () =>
{
    

    return(
        <View style={styles.container}>
    <CalendarStrip
    scrollable
    style={{height:150, paddingTop: 40, paddingBottom: 10}}
    />
    <Text style = {{marginTop:30, marginLeft:40, fontSize:19, fontWeight:'bold'}}>Name</Text>
    <TextInput style = {{marginLeft:40, fontSize:17, marginTop:15, borderColor:'black', paddingTop:1, paddingBottom:2, paddingLeft:5, borderWidth:1, width:350}} placeholder = "Enter Name"/>
    <Text style = {{marginTop:40, marginLeft:40, fontSize:19, fontWeight:'bold'}}>Department</Text>
    <TextInput style = {{marginLeft:40, fontSize:17, marginTop:15, paddingTop:1, paddingBottom:2, paddingLeft:5, borderColor:'black', borderWidth:1, width:350}} placeholder = "Enter Department"/>
    <Text style = {{marginTop:40, marginLeft:40, fontSize:19, fontWeight:'bold'}}>Year of Study</Text>
    <TextInput style = {{marginLeft:40, fontSize:17, marginTop:15,paddingTop:1, paddingBottom:2, paddingLeft:5, borderColor:'black', borderWidth:1, width:350}} placeholder = "Enter Year of Study"/>
    <Pressable style={styles.button}>
      <Text style={styles.text}>Reserve Book</Text>
    </Pressable>
  </View>
    )
}

export default Reserve;

const styles = StyleSheet.create({
    container: { flex: 1 },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 3,
        elevation: 0,
        backgroundColor: 'aquamarine',
        width:170,
        height:40,
        borderColor:'#20b2aa',
        marginLeft:-6,
        borderWidth:1,
        marginTop:80,
        elevation:5,
        shadowRadius:5,
        shadowColor:'#000000',
        marginLeft:120,
        position : 'relative'
    },
    text:
    {
        fontSize: 16,
        lineHeight: 20,
        fontWeight:'bold',
        letterSpacing: 0.25,
        color:'#000000',
        marginTop:50,
        position:'absolute'
    }
  });