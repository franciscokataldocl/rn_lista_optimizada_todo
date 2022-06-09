import { Text,StyleSheet,TouchableOpacity } from 'react-native';


const PrimaryBtn = ({text, color}) => {
  return (
    <TouchableOpacity 
    
    style={[styles.addButton, color === 'purple' ? styles.purpleBtn : styles.whiteBtn]}>
    <Text style={[styles.addButtonText, color === 'purple' ? styles.whiteText : styles.blackText]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryBtn;

const styles = StyleSheet.create({
    addButton:{
      width: 150,
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: 100,
      marginTop: 15,
      shadowColor: '#6319B8',
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
      
    },
    addButtonText:{
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    purpleBtn:{
backgroundColor: '#6319B8',

    },
    whiteBtn:{
      backgroundColor: '#fff',

    },
    whiteText:{
      color: '#fff',
    },
    blackText:{
      color: '#140D2C',
    }
  });
  