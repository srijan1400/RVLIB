import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from 'react'
import RVLIB from '../screens/home'
import Screen from '../screens/search'
import Reservation from '../screens/reservation'
import Login from "../screens/login";
import Loading from "../screens/loadingScreen";
import SignUp from "../screens/signup";
import Header from '../shared/header'


const screens = {
    SignUp :
    {
        screen: SignUp,
        navigationOptions : {
            headerShown:false
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
    Login : 
    {
        screen: Login,
        navigationOptions : {
            headerShown : false
        }

    },
    RVLIB:
    {
        screen: RVLIB,
        navigationOptions: ({navigation}) =>
        {
            return{
                headerTitle: () => <Header navigation = {navigation} title ='RVLIB' />
            }
        }
    },
    Reservation:
    {
        screen: Reservation
    }
}

const HomeStack = createStackNavigator(screens,
    {
        defaultNavigationOptions:
        {
            headerStyle:{
                backgroundColor:'#7fffd4',
                height:100,
    elevation: 5
            }
        }
    })

export default HomeStack;