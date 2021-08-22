import React from 'react'
import { useState, setState} from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity,  RecyclerViewBackedScrollView, Modal, TextInput, Linking, Alert} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';
import IconMat from 'react-native-vector-icons/AntDesign'
import { signIn } from '../API/firebaseMethods';

const Login = ({navigation}) =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => 
    {
        if(!email)
        {
            Alert.alert('Username field is empty!');
        }

        if(!password)
        {
            Alert.alert('Password field is empty!')
        }

        signIn(email, password);
        setEmail('');
        setPassword('');
    };

    return(
        <View>
            <Text style = {styles.text0}> RVLIB</Text>
            <View style = {styles.main}>
            
                <Text style = {styles.text1}> Login</Text>
            </View>
            <View>
                <Text style = {styles.text2}> Email</Text>
                <TextInput style = {styles.input1} placeholder = "Enter email" onChangeText = {(email) => setEmail(email)}/>
                <Text style = {styles.text2}> Password</Text>
                <TextInput style = {styles.input2} placeholder = "Enter password" secureTextEntry = {true} onChangeText = {(password) => setPassword(password)}/>
            </View>
            <View>
                <Pressable style = {styles.login_button} onPress = {handlePress} >
                    <Text style = {styles.logintext}>Login</Text>
                </Pressable>
                <Text style = {styles.url} onPress = {() => {
        navigation.navigate('SignUp')}}>Sign Up Instead..</Text>
        <Pressable style = {styles.login_button2} onPress = {() => {
        navigation.navigate('Loading')}}>
            <IconMat style = {{fontSize:23, marginLeft:-170, paddingRight:35}} name = {"google"} />
                    <Text style = {styles.logintext}>Login with Google</Text>
                </Pressable>
            </View>
            
        </View>    
    )
}

export default Login;

const styles = StyleSheet.create({
    main:
    {
        justifyContent:'center',
        alignItems:'center',
        
    },
    text1:
    {
        fontSize:25,
        paddingTop:55
    },
    text0:
    {
        fontSize:35,
        fontWeight:'700',
        marginTop:120,
        marginLeft:150
    },
    text2:
    {
        fontSize:15,
        paddingTop:50,
        paddingLeft:65
        
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
        paddingHorizontal: 25,
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
        position:'absolute'
    },
    url:
    {
        fontSize:15,
        marginTop:20,
        fontWeight:'700',
        marginLeft:143,
        textDecorationLine: 'underline'
    },
    login_button2:
    {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 3,
        elevation: 0,
        backgroundColor: 'white',
        width:230,
        height:40,
        borderColor:'#20b2aa',
        marginTop:70,
        elevation:5,
        shadowRadius:5,
        shadowColor:'#000000',
        marginLeft:95,
        position : 'relative', color: 'grey',
        paddingLeft:35,
        paddingRight:-10,
        
    }
});