import React from 'react'
import { View, Text, Button, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { useState } from 'react';


const images = [
    'https://images-na.ssl-images-amazon.com/images/I/71lsQUISL8L.jpg',
    'https://images-eu.ssl-images-amazon.com/images/I/517%2Bps3EtNL._AC_UL600_SR378,600_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81pQyAKvkGL.jpg',
    'https://www.getmybooks.com/files/products/original/b10614ff-5400-44b5-b05c-df662a90253a.jpg'
  ]


const text = [
    'Electrical Eng',
    'Chemistry',
    'Physics'
]


const Results = ({navigation}) =>
{
    return(
        <ScrollView contentContainerStyle = {{flexDirection:'row', flexWrap:'wrap'}}>
            <TouchableOpacity onPress = {() => {navigation.navigate('Borrow')}} >
                <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/71lsQUISL8L.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://images-eu.ssl-images-amazon.com/images/I/517%2Bps3EtNL._AC_UL600_SR378,600_.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/81pQyAKvkGL.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://www.getmybooks.com/files/products/original/b10614ff-5400-44b5-b05c-df662a90253a.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://static.kopykitab.com/image/cache/data/schand-publishing/schand1458-300x380.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/51WQ9QlRWIL._SX258_BO1,204,203,200_.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://4.bp.blogspot.com/-neblxdqhdS8/XIlJcybx_dI/AAAAAAAAEv0/ogKj5vScXAAzKiEsdgryaoH7kdIboNzEACLcBGAs/w680/Theory%2BAnd%2BPracticals%2Bof%2BEngineering%2BChemistry%2BBy%2BShashi%2BChawla%2BPdf.jpeg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325980709.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'http://imshopping.rediff.com/imgchkbooks/200-300/books/pixs/05/9789380712505.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {{uri:'https://www.pragationline.com/wp-content/uploads/2019/08/N5153.jpg'}} style = {{marginTop:40, marginLeft:30, width:160, height:240, marginBottom:20}}/>
            </TouchableOpacity>     
        </ScrollView>
    )
}

export default Results;

const styles = StyleSheet.create({
    searchimage:
    {
        width:180,
        height:220,
        marginLeft:40,
        marginTop:70,
        marginBottom:50
    }
});