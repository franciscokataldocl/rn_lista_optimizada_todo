import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Card = ({item, todoList, setTodoList,modalVisible, setItemSelected,setModalVisible}) => {




  const handleModal = (id)=>{
    setModalVisible(!modalVisible)
  setItemSelected(todoList.filter(item => item.id === id)[0])
  }

  const handleComplete = (id) =>{
    console.log('test')
      setTodoList(todoList.map(todo => 
        (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
        console.log(todoList)
  }
  

  return (
    <View style={[styles.card, item.completed ? styles.cardCompleted : '']}>
      <Text onPress={() => handleComplete(item.id)} style={[styles.text, item.completed ? styles.completed : '']} >{item.value}</Text> 
      <Ionicons onPress={() => handleModal(item.id)}  style={styles.close} name="close" size={24} color="#140D2C" />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 'auto',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft:20,
    shadowColor: '#afafaf',
    shadowOffset: { width: 1, height:1},
    shadowOpacity: 0.2,
    shadowRadius: 12,  
    elevation: 10,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  text:{
      width:'85%',
      fontSize: 18,


  },
  cardCompleted:{
    opacity: 0.5,
  }
  ,
  completed:{
textDecorationLine: 'line-through',
  },
  close:{
    opacity: 0.6,
  }
});
