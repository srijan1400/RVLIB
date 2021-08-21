import React from 'react'

import { View, Text, Image, Button } from 'react-native'

const Info = () =>
{
    return(
        <View>
            <View style = {{alignItems:'center', marginTop:40}}>
                <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/71EXJQkGMGL.jpg'}} style = {{width:160, height:230}}/>
                <Text style = {{fontSize:17, marginTop:60}}>Title :  Principles of Electrical Engineering</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-45}}>Author :  VK Mehta and Rohit Mehta</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-85}}>Subject :  Electrical Engineering</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-260}}>Edition :  8</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-110}}>Renew Days Remaining :  10</Text>
            </View>
            <View style = {{width:140, marginTop:50, marginLeft:130}}>
                <Button title = "Renew Book"/>
            </View>
        </View>
    )
}

export default Info;