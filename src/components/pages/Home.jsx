import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList} from 'react-native'; 
import AddForm from '../formularios/AddForm';
import Card from '../cards/Card';
import CustomModal from '../modal/CustomModal';





const Home = () => {
  const [todoList,setTodoList] = useState([]);


  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false);


  // useEffect(() => {
  // setTodoList(todoList => [todoList])
  // }, [complete])
  


  const renderItem = ({ item }) => (
    <Card key={item.id} setTodoList={setTodoList} todoList={todoList} item={item} modalVisible={modalVisible} setModalVisible={setModalVisible}  setItemSelected={setItemSelected}/>
  );

  const keyExtractor= (item) => item.id.toString();



  return (
    <View style={styles.container}>
        <AddForm  setTodoList={setTodoList}/>
        <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
        <CustomModal setTodoList={setTodoList} todoList={todoList} itemSelected={itemSelected} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eff0f5',
      alignContent: 'center',
    alignItems: 'center',
    },
    
  });