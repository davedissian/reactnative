import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [username, setUsername] = useState('') 
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  
  const cadastro = () => {
    alert(name)
    alert(surname)
    alert(username)
    alert(email)
    alert(senha)
  }

  return (
    <View style={styles.container}>

      <Image source={require('./assets/samurai.jpg')} style={styles.logo}></Image>
      <Text style={styles.text2}>Faça seu cadastro</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={text => setName(text)}/>
      <TextInput style={styles.input2} placeholder="Digite seu sobrenome" onChangeText={text => setSurname(text)}/>
      <TextInput style={styles.input2} placeholder="Digite seu nome de usuario" onChangeText={text => setUsername(text)}/>
      <TextInput style={styles.input2} placeholder="Digite seu email" onChangeText={text => setEmail(text)}/>
      <TextInput style={styles.input3} secureTextEntry={true} placeholder="Digite sua senha" onChangeText={text => setSenha(text)}/>
      <TouchableOpacity style={styles.btn} onPress={()=>cadastro()} >
        <Text style={styles.text3}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(#2F4F4F, #1C1C1C)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: 15
  },
  input: {
    margin: 10,
    padding: 20,
    width: 250,
    height: 20,
    backgroundColor: '#fff',
    fontSize: 15,
    borderTopEndRadius: 20
  },
  input2: {
    margin: 10,
    padding: 20,
    width: 250,
    height: 20,
    backgroundColor: '#fff',
    fontSize: 15
  },
  input3: {
    margin: 10,
    padding: 20,
    width: 250,
    height: 20,
    backgroundColor: '#fff',
    fontSize: 15,
    borderBottomLeftRadius: 20
  },
  text: {
    fontSize: 30,
    color: 'white'
  },
  text2: {
    fontSize: 20
  },
  text3: {
    color: 'white',
    fontSize: 15
  },
  Login: {
    width: 50,
    height: 50,
    color: 'white',
    margin: 10
  },
  btn: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'grey',
    padding: 10
  }
});


