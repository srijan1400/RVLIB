import React from 'react'
import { useState } from 'react';
import { View, Text, Button, Image, Modal, StyleSheet, Pressable,  ScrollView, TouchableOpacity,  RecyclerViewBackedScrollView} from 'react-native'
import IconMat from 'react-native-vector-icons/Entypo'
import DropDownPicker from 'react-native-dropdown-picker';


const Reviews = ({navigation}) =>
{
    const [view, setView] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Highest Rated', value: 'Highest Rated'},
    {label: 'Lowest Rated', value: 'Lowest Rated'}
    ]);

    const handleonClick1 = () =>
    {
        setView(true);
    };

    const handleonClick2 = () =>
    {
        setView(false);
    };

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
                <Text style = {{marginTop:60, fontSize:19, marginLeft:-180, textDecorationLine: 'underline'}} onPress = {handleonClick1}>Srijan Devnath</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>ISE</Text>
                <Text style = {{marginTop:40, fontSize:19, marginLeft:-180, textDecorationLine: 'underline'}}>Rahul Dutta</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>CSE</Text>
                <Text style = {{marginTop:40, fontSize:19, marginLeft:-180, textDecorationLine: 'underline'}}>Shaurya Joshi</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>MCH</Text>
                <Text style = {{marginTop:40, fontSize:19, marginLeft:-180, textDecorationLine: 'underline'}}>Mayank Agarwal</Text>
                <Text style = {{marginTop:10, fontSize:16, marginLeft:-180}}>ECE</Text>
            </View>
            <View>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:-365}}>⭐   ⭐   ⭐   ⭐ </Text>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:75}}>⭐   ⭐   ⭐  </Text>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:75}}>⭐   ⭐   ⭐   ⭐</Text>
                <Text style = {{marginLeft:190, fontSize:18, marginTop:75}}>⭐   ⭐   ⭐   ⭐  </Text>
            </View>
            <Pressable style={styles.button} onPress = {() => {
        navigation.navigate('Add')}}>
      <Text style={styles.text}>Add Review</Text>
    </Pressable>
    <Modal 
    transparent = {true}
    visible = {view}>
        <View style = {{backgroundColor:'#000000aa', flex:1}}>
            <View style = {{backgroundColor:'#ffffff', margin:40, padding:30, height:320, marginTop:250, borderRadius:15}}>
            <Text style = {{fontSize:20}}>Srijan  Devnath</Text>
            <IconMat  style = {{marginLeft:245, marginTop:-30, fontSize:25}} name = "cross" onPress = {handleonClick2}/>
            <Text style = {{fontSize:16, marginTop:15}}>3rd Year</Text>
            <Text style = {{fontSize:16, marginTop:10}}>ISE</Text>
            <Text style = {{marginLeft:0, fontSize:18, marginTop:20}}>⭐   ⭐   ⭐   ⭐ </Text>
            <Text style = {{fontSize:13, marginTop:20}}>" A really helpful reference book for understanding basic concepts of Chemistry and covers large portions of the 1st Year syllabus. Must have for exams "</Text>
            </View>
        </View>
        </Modal>
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