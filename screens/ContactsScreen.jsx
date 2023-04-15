import { Text, View, Button } from 'react-native';
import {styles} from '../assets/styles/styles'

function Contacts({route}){
  const {email, phone} = route.params
    return(
      <View style={styles.container}>
      <Text>Telefono:{phone}</Text>
      <Text>Correo:{email}</Text>
        <Text style={{fontWeight:'bold'}}>Estamos en Contactenos</Text>
      </View>
    );
  }

export default Contacts
  
  