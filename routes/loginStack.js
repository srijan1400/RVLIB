import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from 'react';
import Login from "../screens/login";
import SignUp from "../screens/signup";
import Loading from "../screens/loadingScreen";
import RVLIB from "../screens/home";
const screens = {

    Login : 
    {
        screen: Login,
        navigationOptions : {
            headerShown : false
        }

    },
    Loading:
    {
        screen:Loading,
        navigationOptions :
        {
            headerShown:false
        }
    },
    SignUp :
    {
        screen: SignUp,
        navigationOptions : {
            headerShown:false
        }
    }


}
const LoginStack = createStackNavigator(screens,
    {
        defaultNavigationOptions:
        {
            headerStyle:{
                backgroundColor:'#f8f8ff',
                height:0
            }
        }
    });

export default LoginStack;