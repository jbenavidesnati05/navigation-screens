//import {  Text, View, Button } from 'react-native';
//LIBRERIAS PARA EL MANEJO DE L NAVEGACION ENTRE PANTALLAS
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Hometabs from './screens/HomeTabsScreen';

//


//DEFINIR LAS RUTAS DE CADA COMPONENTE
 const Stack = createNativeStackNavigator(); 


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Hometabs'>
       
        <Stack.Screen name='Hometabs' component={Hometabs} options={{title:'Sistema Demo'}}/>
        {/* <Stack.Screen name='Contacts' component={ContactsScreen} options={{title:'Contactenos'}}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{title:'Inicio'}}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}






