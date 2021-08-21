import React from 'react'
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Pressable,  ScrollView, TouchableOpacity,  RecyclerViewBackedScrollView} from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';

const Reviews = () =>
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Highest Rated', value: 'Highest Rated'},
    {label: 'Lowest Rated', value: 'Lowest Rated'}
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
    {label: 'ISE', value: 'ISE'},
    {label: 'CSE', value: 'CSE'},
    {label: 'ECE', value: 'ECE'},
    {label: 'TC', value: 'TC'},
    {label: 'BT', value: 'BT'},
    {label: 'MCH', value: 'MCH'}
  ]);

  return(
      <View style = {{alignItems:'center'}}>
          <DropDownPicker placeholder = "Sort By Ratings" style = {{width: 300, marginLeft:55, marginTop:30}}
               open={open}
               value={value}
               items={items}
               setOpen={setOpen}
               setValue={setValue}
               setItems={setItems}
            />
            <DropDownPicker placeholder = "Sort By Department" style = {{width:300, marginLeft:55, marginTop:25}}
               open={open2}
               value={value2}
               items={items2}
               setOpen={setOpen2}
               setValue={setValue2}
               setItems={setItems2}
            />
            <View>
                <Text style = {{marginTop:60, fontSize:19, marginLeft:-180}}>Srijan Devnath</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>ISE</Text>
                <Text style = {{marginTop:40, fontSize:19, marginLeft:-180}}>Rahul Dutta</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>CSE</Text>
                <Text style = {{marginTop:40, fontSize:19, marginLeft:-180}}>Shaurya Joshi</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>MCH</Text>
                <Text style = {{marginTop:40, fontSize:19, marginLeft:-180}}>Mayank Agarwal</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>ECE</Text>
            </View>
            <View>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:-350}}>⭐   ⭐   ⭐   ⭐ </Text>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:70}}>⭐   ⭐   ⭐  </Text>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:70}}>⭐   ⭐   ⭐   ⭐</Text>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:70}}>⭐   ⭐   ⭐   ⭐  </Text>
            </View>
            <Pressable style={styles.button}>
      <Text style={styles.text}>Add Review</Text>
    </Pressable>
      </View>
  )

}

export default Reviews;

const styles = StyleSheet.create(
    {
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 3,
            elevation: 0,
            backgroundColor: 'aquamarine',
            width:170,
            height:40,
            borderColor:'#20b2aa',
            marginLeft:-6,
            borderWidth:1,
            marginTop:40,
            elevation:5,
            shadowRadius:5,
            shadowColor:'#000000'
        },
        text:
        {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color:'#000000',
            marginTop:50,
            position:'absolute'
        }
    }
)