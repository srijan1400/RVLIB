import React from 'react'
import { useState, setState} from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity,  RecyclerViewBackedScrollView, Modal, TextInput, Linking} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';
import IconMat from 'react-native-vector-icons/AntDesign'

const img = ['https://images-na.ssl-images-amazon.com/images/I/81X7SugiDdL.jpg']


const SignUp = ({navigation}) =>
{
    

    return(
        <View>
            <Image style = {{width:70, height:100, marginTop:75, marginLeft:20}} source = {{uri : 'https://images-na.ssl-images-amazon.com/images/I/81X7SugiDdL.jpg'}} />
            <Image style = {{width:70, height:100, marginTop:-55, marginLeft:50}} source = {{uri : 'https://bdmpublications.com/wp-content/uploads/2019/10/Python-Coding-Manual-Vol-20.jpg'}}/>
            <Image style = {{width:70, height:100, marginTop:-50, marginLeft:30}} source = {{uri : 'https://images-na.ssl-images-amazon.com/images/I/61CVP-MfUoL.jpg'}} />
            <Text style = {styles.text0}> RVLIB</Text>
            <View style = {styles.main}>
                <Text style = {styles.text1}> Sign Up</Text>
            </View>
            <View>
                <Text style = {styles.text2}> Username</Text>
                <TextInput style = {styles.input1} placeholder = "Enter a username"/>
                <Text style = {styles.text2}> Email</Text>
                <TextInput style = {styles.input1} placeholder = "Enter your email"/>
                <Text style = {styles.text2}> Password</Text>
                <TextInput style = {styles.input2} placeholder = "Enter a password" secureTextEntry = {true}/>
            </View>
            <View>
                <Pressable style = {styles.login_button} onPress = {() => {
        navigation.navigate('RVLIB')}}>
                    <Text style = {styles.logintext}>Sign In</Text>
                </Pressable>
                <Text style = {styles.url} onPress = {() => {
        navigation.navigate('Login')}}>Log In instead..</Text>
        <Pressable style = {styles.login_button2} >
            <IconMat style = {{fontSize:23, marginLeft:-170, paddingRight:45}} name = {"google"} />
                    <Text style = {styles.logintext2}>Sign Up with Google</Text>
                </Pressable>
            </View>
            
        </View>    
    )
}

export default SignUp;

const styles = StyleSheet.create({
    main:
    {
        justifyContent:'center',
        alignItems:'center',
        
    },
    text1:
    {
        fontSize:25,
        paddingTop:45
    },
    text0:
    {
        fontSize:35,
        fontWeight:'700',
        marginTop:-135,
        marginLeft:150
    },
    text2:
    {
        fontSize:15,
        paddingTop:30,
        paddingLeft:65,
        
    },
    input1:
    {
        marginLeft:65,
        paddingTop:5,
        borderColor:'black',
        borderWidth:1,
        paddingLeft:10,
        width:280,
        marginTop:15,
        paddingBottom:5
    },
    input2:
    {
        marginLeft:65,
        paddingTop:5,
        paddingBottom:5,
        marginTop:15,
        width: 280,
        borderColor:'black',
        borderWidth:1,
        paddingLeft:10
    },
    login_button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderRadius: 3,
        elevation: 0,
        backgroundColor: 'aquamarine',
        width:140,
        height:40,
        borderColor:'#20b2aa',
        borderWidth:1,
        marginTop:50,
        elevation:5,
        shadowRadius:5,
        shadowColor:'#000000',
        marginLeft:135,
        position : 'relative'
    },
    logintext:
    {
        fontSize: 16,
        lineHeight: 20,
        fontWeight:'bold',
        letterSpacing: 0.25,
        color:'#000000',
        marginTop:50,
        position:'absolute', marginLeft:75
    },
    url:
    {
        fontSize:15,
        marginTop:20,
        fontWeight:'700',
        marginLeft:148,
        textDecorationLine: 'underline'
    },
    login_button2:
    {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 3,
        elevation: 0,
        backgroundColor: 'white',
        width:260,
        height:40,
        borderColor:'#20b2aa',
        marginTop:70,
        elevation:5,
        shadowRadius:5,
        shadowColor:'#000000',
        marginLeft:80,
        position : 'relative', color: 'grey',
        paddingLeft:10,
        
    },
    logintext2:
    {
        fontSize: 15,
        lineHeight: 20,
        fontWeight:'bold',
        letterSpacing: 0.25,
        color:'#000000',
        marginTop:50,
        position:'absolute', marginLeft:85,
        paddingRight:-15
    }
});