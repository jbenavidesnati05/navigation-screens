import { Text, View, useAnimatedValue } from 'react-native';
import {styles} from '../assets/styles/styles'
import { TextInputc, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

let users = [
  {username :'tv', name:"teresa", password: "11", role: 1},
  {username :'fz', name:"andy",   password: "12", role: 2}
]


export default function HomeScreen({navigation}){

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [message,  setmessage] = useState('');

    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          INICIO DE SESION
        </Text>
        {/* USERNAME  */}
        <TextInput
          label="Usuario"
          mode="outlined"
          left={<TextInput.Icon icon="account"></TextInput.Icon>}
          onChangeText={(username) => setusername(username)}
          value={username}
        ></TextInput>
        {/* PASSWORD  */}
        <TextInput
          label="Contraseña"
          mode="outlined"
          left={<TextInput.Icon icon="eye"></TextInput.Icon>}
          onChangeText={(password) => setpassword(password)}
          value={password}
          secureTextEntry
        ></TextInput>
        {/* INGRESAR  */}
        <Button
          icon="login"
          mode="contained"
          onPress={() => {
            let fuser = users.find(
              (usr) => usr.username == username && usr.password == password
            );
            if (fuser != undefined) {
              const { name, password } = fuser;
              navigation.navigate("Profile", {
                name: name,
                password: password,
              });
              setmessage("");
            } else {
              setmessage("usuario y/o contraseña invalidos");
            }
          }}
        >
          Ingresar
        </Button>
        <Text style={{ color: "red" }}>{message}</Text>
        <Button
          title="Ir a Perfil del Usuario"
          onPress={() => {
            navigation.navigate("Profile");
          }}
        />
      </View>
    );
  }



  