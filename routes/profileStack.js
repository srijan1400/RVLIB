import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from 'react'
import Profile from "../screens/profile";
import Header from '../shared/header'


const screens = {
    Profile:
    {
        screen: Profile,
        navigationOptions: ({navigation}) =>
        {
            return{
                headerTitle: () => <Header navigation = {navigation} title ='My Profile' />
            }
        }
    }
}

const ProfileStack = createStackNavigator(screens,
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

export default ProfileStack;