import { createStackNavigator } from "react-navigation-stack";
import React from 'react'
import Home from '../screens/home'
import Screen from '../screens/search'
import Search from "../screens/search";
import Header from '../shared/header'
import Reservations from "../screens/reservation";
import Info from "../screens/bookInfo1";
import Info2 from "../screens/bookInfo2";

const screens = {
    Reservations:
    {
        screen: Reservations,
        navigationOptions: ({navigation}) =>
        {
            return {
                headerTitle: () => <Header navigation = {navigation} title = 'Reservations'/>
            }
        }
    },
    Info:
    {
        screen:Info
    },
    Info2:
    {
        screen:Info2
    }
}

const ReservationsStack= createStackNavigator(screens,
    {
        defaultNavigationOptions:
        {
            headerStyle:{
                backgroundColor:'#7fffd4',
                height:100
            }
        }
    })

export default (ReservationsStack)