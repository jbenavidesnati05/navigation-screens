import { Text, View, Button } from 'react-native';
import {styles} from '../assets/styles/styles'

export default function HomeScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', marginBottom:10}}>Estamos en Inicio</Text>
        <Button
          title="Ir a Perfil del Usuario"
          onPress={()=>{
            navigation.navigate('Profile')
          }}
        />
      </View>
    );
  }



  