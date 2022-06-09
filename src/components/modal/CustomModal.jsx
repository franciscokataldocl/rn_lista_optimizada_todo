import { Modal, View, Text , StyleSheet} from 'react-native';
import BtnWithParams from '../botones/BtnWithParams';

const CustomModal = ({ setModalVisible, modalVisible,itemSelected,setTodoList, todoList}) => {

const handleRemoveSelected = (id) =>{
  console.log(todoList)
const filtered = todoList.filter(todo => {
  return todo.id !== id;
})
console.log(filtered)
setTodoList(filtered)
setModalVisible(!modalVisible)

}

  return (
    <Modal 
    style={styles.modalContainer} 
    animationType='slide' 
    transparent={true} 
    visible={modalVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Estas a punto de eliminar la tarea:</Text>
        <Text style={styles.text}>{itemSelected.value}</Text>
        <BtnWithParams handlePress={handleRemoveSelected} id={itemSelected.id} text='ELIMINAR' color='purple'/>
        {/* <PrimaryBtn action={handleRemoveSelected(itemSelected.id)} text={'ELIMINAR'} color={'purple'}/> */}
      </View>
    </Modal>
  );
};

export default CustomModal;
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: 'green',
      margin: 0
  }
,  
  modalContent: {
    backgroundColor: '#fff',
          margin: 0,
          height: '100%',
          marginTop:100,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          shadowOffset: {
            width: 20,
            height: -100,
          },
          shadowColor: '#000000',
          elevation: 50,
          shadowOpacity: 1,
    shadowRadius: 1, 
    padding: 20,
      alignItems: 'center',
    
  },
  modalTitle:{
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    marginTop:10,
  },
  text:{
    width:'100%',
    fontSize: 18,
    textAlign: 'center',
    marginTop:20,
    marginBottom:20,
},

})
