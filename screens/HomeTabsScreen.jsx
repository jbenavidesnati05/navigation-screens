import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ContactsScreen from './ContactsScreen'
import {MaterialIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Hometabs(){
    return (
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown : false,
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor:'orange',
      }}
      >
        <Tab.Screen name="Home"     component={HomeScreen}      options={{tabBarIcon:() =>(<MaterialIcons size={25} name='home'></MaterialIcons>)}}/>
        <Tab.Screen name="Profile"  component={ProfileScreen}   options={{tabBarIcon:() =>(<MaterialIcons size={25} name='person'></MaterialIcons>)}}/>
        <Tab.Screen name="Contacts" component={ContactsScreen}  options={{tabBarIcon:() =>(<MaterialIcons size={25} name='phone'></MaterialIcons>)}}/>
      </Tab.Navigator>
    );
  } 