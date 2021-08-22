import { createStackNavigator } from "react-navigation-stack";
import React from 'react'
import Home from '../screens/home'
import Screen from '../screens/search'
import Search from "../screens/search";
import Header from '../shared/header'
import DropDownPicker from 'react-native-dropdown-picker';
import Results from "../screens/searchResults";
import Reviews from "../screens/reviews";
import Borrow from "../screens/resutsDetails";
import Reserve from "../screens/borrow";
import Add from "../screens/addReviews";

const screens = {
    Search:
    {
        screen: Search,
        navigationOptions: ({navigation}) =>
        {
            return {
                headerTitle: () => <Header navigation = {navigation} title = 'Search'/>
            }
        }
    },
    Results:
    {
        screen: Results
    },
    Borrow:
    {
        screen:Borrow
    },
    Reviews:
    {
        screen:Reviews
    },
    Add:
    {
        screen : Add,
        navigationOptions :
        {
            title: "Add a Review"
        }
    },
    Reserve:
    {
        screen:Reserve
    }
}

const SearchStack= createStackNavigator(screens,
    {
        defaultNavigationOptions:
        {
            headerStyle:{
                backgroundColor:'#7fffd4',
                height:100
            }
        }
    })

export default (SearchStack)