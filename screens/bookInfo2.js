import React from 'react'

import { View, Text, Image, Button } from 'react-native'

const Info2 = () =>
{
    return(
        <View>
            <View style = {{alignItems:'center', marginTop:40}}>
                <Image source = {{uri:'https://inteng-storage.s3.amazonaws.com/img/iea/3gG998vaGV/sizes/an-introduction-to-mechanical-engineering_resize_md.jpg'}} style = {{width:160, height:230}}/>
                <Text style = {{fontSize:17, marginTop:60}}>Title : Introduction to Mechanical Engineering</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-40}}>Author :  Jonathan Wickert and Kempert</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-90}}>Subject :  Mechanical Engineering</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-285}}>Edition :  3</Text>
                <Text style = {{fontSize:17, marginTop:40, marginLeft:-140}}>Renew Days Remaining :  5</Text>
            </View>
            <View style = {{width:140, marginTop:50, marginLeft:130}}>
                <Button title = "Renew Book"/>
            </View>
        </View>
    )
}

export default Info2;