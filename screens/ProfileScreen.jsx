import { Text, View, Button } from 'react-native';
import {styles} from '../assets/styles/styles'

function ProfileScreen({navigation}){

  let email = 'a@gmail.com';
  let phone = '3434534'
  
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Estamos en Perfil del Usuario</Text>
        <Button
        title='Contactenos'
        onPress={()=>{
          navigation.navigate('Contacts',{email:email, phone:phone})
        }}
        >

        </Button>
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