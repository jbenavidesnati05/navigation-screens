import { Text, View, Button } from 'react-native';
import {styles} from '../assets/styles/styles'

function ProfileScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Estamos en Perfil del Usuario</Text>
        <Button
          title="Ir a Contactenos"
          onPress={()=>{
            navigation.navigate('Contacts')
          }}
        />
      </View>
    );
  }
 
 export default ProfileScreen 