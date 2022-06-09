import React, {useState, useEffect} from 'react';
import { TextInput, Text, View, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import uuid from 'react-native-uuid';
import BtnNoParams from '../botones/BtnNoParams';



const AddForm = ({setTodoList}) => {

//estado del input
const [text, setText] = useState('');



const handleInputChange = (text) =>{
  if(text !== ''){
    setText(text);
  }
 
}


const handleAddTodo = () =>{
  if(text !== ''){
    setTodoList(prev => [...prev, {id: uuid.v4(), value:text, completed: false}])
    setText('');
  }
 
}


  return (
    <View style={styles.formContainer}>
    <Text style={styles.label}>Nueva tarea</Text>
    
    <TextInput 
    value={text}
    onChangeText={(text) => handleInputChange(text)}
    style={styles.input} 
    placeholder='Escribe una tarea' 
    placeholderTextColor="#fff"  />
<BtnNoParams handlePress={handleAddTodo} text='AGREGAR' color=''/>
    </View>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  formContainer:{
    backgroundColor: '#7549D7',
    height: 250,
    width:'100%',
    paddingTop: 80,
    paddingHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 22,
    paddingLeft: 10,
    borderColor: '#fff',
    color: '#fff',
  },
  label:{
      fontSize: 18,
      color: '#fff',
      paddingBottom:5,
  }
  
});
