import React from 'react'

import { View, Text, Image, ScrollView, StyleSheet, Pressable} from 'react-native'

const images = ['https://i.imgur.com/ETrZl7a.jpg','https://www.cl.cam.ac.uk/~rja14/Papers/book2coverlarge.jpg','https://3.imimg.com/data3/FU/AS/MY-9192352/electronics-engineering-books-500x500.jpg']


const Profile = ({navigation}) =>
{
    return(
        <View>
            <Image  style = {{width:150, height:150, marginLeft:135, marginTop:25, borderRadius:70}} source = {{uri:'https://media-exp3.licdn.com/dms/image/C4E03AQE7vm1m-hTOew/profile-displayphoto-shrink_200_200/0/1624340009858?e=1632355200&v=beta&t=B2nq0RLPoedbiKPb4jPgvZcp5aNEZAWcLh_iEvuepMc'}} />
            <Text style = {{marginLeft:145, marginTop:10, fontSize:19}}>Srijan Devnath</Text>
            <Pressable style = {styles.login_button}  >
                    <Text style = {styles.logintext}>Update Profile</Text>
                </Pressable>
            <View style = {{marginTop:25}}>
                
                <Text style = {{marginTop:5, marginLeft:30, fontSize:19, fontWeight:'bold'}}>Email  - </Text>
                <Text style = {{marginTop:-25, marginLeft:130, fontSize:17}}>srijandevnath.is19@rvce.edu.in</Text>
                <Text style = {{marginTop:30, marginLeft:30, fontSize:19,fontWeight:'bold'}}>Phone  - </Text>
                <Text style = {{marginTop:-25, marginLeft:130, fontSize:17}}>9711309606</Text>
                <Text style = {{marginTop:30, marginLeft:30, fontSize:19,fontWeight:'bold'}}>College  - </Text>
                <Text style = {{marginTop:-25, marginLeft:130, fontSize:17}}>RV College of Engineering</Text>
                <Text style = {{marginTop:30, marginLeft:30, fontSize:19, fontWeight:'bold'}}>Department  - </Text>
                <Text style = {{marginTop:-25, marginLeft:178, fontSize:17}}>Information Science</Text>
                <Text style = {{marginTop:30, marginLeft:30, fontSize:19,fontWeight:'bold'}}>Year  - </Text>
                <Text style = {{marginTop:-25, marginLeft:100, fontSize:17}}>3rd Year</Text>
            </View>
            <Text style = {{fontSize:19, marginLeft:145, marginTop:35, fontWeight:'bold'}}>Favourite Books</Text>
            <ScrollView pagingEnabled  horizontal showsHorizontalScrollIndicator = {false} style = {styles.scroll}>
                   {images.map((image, index) =>
        (
          <Image key = {index} source = {{uri: image}} style = {styles.slider}/>
        ))
        }
        </ScrollView>
        </View>

    )
}

export default Profile;

const styles = StyleSheet.create({
    slider:{
        resizeMode:'contain',
        height: 100,
        width: 120,
        marginBottom:20,
        borderColor:'#000000',
        borderRadius:5,
        marginTop:20,
        marginLeft:-5,
        marginLeft:15,
        marginBottom:5, marginRight:-5,
      },
      button3:
          {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 9,
            elevation: 0,
            backgroundColor: 'white',
            width:173,
            height:40,
            borderColor:'#20b2aa',
            position:'absolute',
            borderWidth:1,
            marginTop:215,
            marginLeft:125
          },
          text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color:'#20b2aa', 
            position:'absolute'
          },
          login_button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 3,
            elevation: 0,
            backgroundColor: 'aquamarine',
            width:180,
            height:30,
            borderColor:'#20b2aa',
            borderWidth:1,
            marginTop:20,
            elevation:5,
            shadowRadius:5,
            shadowColor:'#000000',
            marginLeft:120,
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
        }


})