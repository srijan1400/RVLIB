import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from 'react'
import RVLIB from '../screens/home'
import Screen from '../screens/search'
import Reservation from '../screens/reservation'

import Header from '../shared/header'


const screens = {
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