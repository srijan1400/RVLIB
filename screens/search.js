import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, Button, Pressable, StyleSheet} from 'react-native'
import { useState } from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign'

const Search = ({navigation}) =>
{
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'ISE', value: 'ISE'},
    {label: 'CSE', value: 'CSE'},
    {label: 'ECE', value: 'ECE'},
    {label: 'TC', value: 'TC'},
    {label: 'BT', value: 'BT'},
    {label: 'MCH', value: 'MCH'}
  ]);

  const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'}
  ]);

  const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
    {label: 'Engineering Chemistry', value: 'Engineering Chemistry'},
    {label: 'Engineering Maths', value: 'Engineering Maths'},
    {label: 'Mechanical Engineering', value: 'Mechanical Engineering'},
    {label: 'Electrical Engineering', value: 'Electrical Engineering'}
  ]);

  const [open4, setOpen4] = useState(false);
    const [value4, setValue4] = useState(null);
    const [items4, setItems4] = useState([
    {label: 'Highest Rated', value: 'Highest Rated'},
    {label: 'Lowest Rated', value: 'Lowest Rated'},
    {label: 'Most Rated', value: 'Most Rated'}
  ]);
    
    
    
    
    return(
        <View style = {{alignItems:'center'}}>
            <Text style = {{paddingTop:20, fontSize:20, marginTop:50}}>Select Department</Text>
            <DropDownPicker containerStyle = {{height:50}} placeholder = "Select Department" style = {{width:'50%', marginLeft:105, marginTop:10}}
               open={open}
               value={value}
               items={items}
               setOpen={setOpen}
               setValue={setValue}
               setItems={setItems}
            />
            <Text style = {{paddingTop:20, fontSize:20, marginTop:40}}>Select Year</Text>
            <DropDownPicker placeholder = "Select Year" style = {{width:'50%', marginLeft:105, marginTop:10}}
               open={open2}
               value={value2}
               items={items2}
               setOpen={setOpen2}
               setValue={setValue2}
               setItems={setItems2}
            />
            <Text style = {{paddingTop:20, fontSize:20, marginTop:40}}>Select Subject</Text>
            <DropDownPicker placeholder = "Select Subject" style = {{width:'50%', marginLeft:105, marginTop:10}}
               open={open3}
               value={value3}
               items={items3}
               setOpen={setOpen3}
               setValue={setValue3}
               setItems={setItems3}
            />
            <Text style = {{paddingTop:20, fontSize:20, marginTop:40}}>Select Rating</Text>
            <DropDownPicker placeholder = "Select Rating" style = {{width:'50%', marginLeft:105, marginTop:10}}
               open={open4}
               value={value4}
               items={items4}
               setOpen={setOpen4}
               setValue={setValue4}
               setItems={setItems4}
            />
            <Pressable style={styles.button} onPress = {() => {
        navigation.navigate('Results')}}>
          <IconAnt style = {{marginLeft:-120, fontSize:20, color:'black'}} name = {"search1"}/>
      <Text style={styles.text}>Search</Text>
    </Pressable>
        </View>
    )
}


export default Search;


const styles = StyleSheet.create(
  {
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 9,
      elevation: 0,
      backgroundColor: 'aquamarine',
      width:200,
      height:40,
      borderColor:'#20b2aa',
      marginLeft:5,
      borderWidth:1,
      marginTop:45
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color:'#000000',
      marginTop:-50,
      position:'absolute'
    }
  }
)