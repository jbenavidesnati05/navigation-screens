//import {  Text, View, Button } from 'react-native';
//LIBRERIAS PARA EL MANEJO DE L NAVEGACION ENTRE PANTALLAS
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
import  HomeScreen  from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ContactsScreen from './screens/ContactsScreen'

//DEFINIR LAS RUTAS DE CADA COMPONENTE
 const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
       
        <Stack.Screen name='Profile' component={ProfileScreen} options={{title:'Perfil del Usuario'}}/>
        <Stack.Screen name='Contacts' component={ContactsScreen} options={{title:'Contactenos'}}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{title:'Inicio'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}




