import React from 'react'

import { View, Text, Button, StyleSheet, Image, Pressable, ScrollView } from 'react-native'


const images = [
    'https://techknowledgebooks.com/wp-content/uploads/2019/09/PO109A.jpg',
    'https://5.imimg.com/data5/OP/PV/MY-37365123/engineering-chemistry-500x500.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51BVxCKKlnL._SX361_BO1,204,203,200_.jpg',
    'https://m.media-amazon.com/images/I/41qyIgp7ecL.jpg',
    'https://www.getmybooks.com/files/products/original/b10614ff-5400-44b5-b05c-df662a90253a.jpg',
    'https://static.kopykitab.com/image/cache/data/schand-publishing/schand1458-300x380.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51WQ9QlRWIL._SX258_BO1,204,203,200_.jpg',
    'https://4.bp.blogspot.com/-neblxdqhdS8/XIlJcybx_dI/AAAAAAAAEv0/ogKj5vScXAAzKiEsdgryaoH7kdIboNzEACLcBGAs/w680/Theory%2BAnd%2BPracticals%2Bof%2BEngineering%2BChemistry%2BBy%2BShashi%2BChawla%2BPdf.jpeg',
    'http://imshopping.rediff.com/imgchkbooks/200-300/books/pixs/05/9789380712505.jpg',
    'https://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325980709.jpg'
]


const Borrow = ({navigation}) =>
{
    return(
        <View>
            <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/71lsQUISL8L.jpg'}} style = {styles.borrowimage}/>
            <View style = {styles.button1} >
            <Pressable style={styles.button} onPress = {() => {
        navigation.navigate('Reserve')}}>
      <Text style={styles.text}>Borrow</Text>
    </Pressable>
            </View>
            <View style = {styles.button2} >
            <Pressable style={styles.button_2} onPress = {() => {
        navigation.navigate('Reviews')}}>
      <Text style={styles.text}>Reviews</Text>
    </Pressable>
            </View>
            <View>
                <Text style = {{fontSize:25, fontWeight:'bold', marginTop:110, marginLeft:29}}>Title :</Text>
                <Text style = {{fontSize:17, marginTop:20, marginLeft:29}}>The Chemistry Book</Text>
            </View>
            <View>
                <Text style = {{fontSize:25, fontWeight:'bold', marginTop:30, marginLeft:29}}>Author :</Text>
                <Text style = {{fontSize:17, marginTop:20, marginLeft:29}}>Derek B Lowe</Text>
            </View>
            <View style = {{flexDirection:'row', justifyContent:'center', marginTop:45}}>
                <Text style ={{fontSize:19, marginTop:-14, fontWeight:'bold'}}>Recommended Books</Text>
            </View>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator = {false} style = {styles.scroll}>
        {images.map((image, index) =>
        (
          <Image key = {index} source = {{uri: image}} style = {styles.slider}/>
        ))
        }
        </ScrollView>
        </View>
    )
}

export default Borrow;

const styles = StyleSheet.create(
    {
        borrowimage:
        {
            width:210,
            height:250,
            marginLeft:25,
            marginTop:50
        },
        button1:
        {
            width:110, marginTop:-180, marginLeft:270        
        },
        button2:
        {
            width:110, marginTop:30,  marginLeft:270        
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 3,
            elevation: 0,
            backgroundColor: 'aquamarine',
            width:130,
            height:40,
            borderColor:'#20b2aa',
            marginLeft:-6,
            borderWidth:1,
            marginTop:-10,
            elevation:5,
            shadowRadius:5,
            shadowColor:'#000000'
          },
          text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color:'#000000',
            marginTop:-50,
            position:'absolute'
          },
          slider:{
            resizeMode:'contain',
            height: 75,
            width: 75,
            marginBottom:20,
            borderColor:'#000000',
            borderRadius:4,
            marginTop:19,
            marginLeft:20
          },
          button_2:
          {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 3,
            elevation: 0,
            backgroundColor: 'aquamarine',
            width:130,
            height:40,
            borderColor:'#20b2aa',
            marginLeft:-5,
            borderWidth:1,
            marginTop:20,
            elevation:5
          }
    }
)