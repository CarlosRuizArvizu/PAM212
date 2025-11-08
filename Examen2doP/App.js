import React, { useState } from 'react';
import { View,Text, TextInput, Alert,Button,StyleSheet, FlatList, ImageBackground} from 'react-native';
import SwitchButton from './Switch'
const Noticias = [
  { id: '1', noticia: 'Deportes' },
  { id: '2', noticia: 'Entretenimiento ' },
  { id: '3', noticia: 'Nacional' },
  { id: '4', noticia: 'Tecnología' },
];
export default function TextScreen() {
    const [nombre, setNombre] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [comentario, setComentario] = useState('');
    const [mensaje, setMensaje] = useState ('');
    const enviarMensaje = () => {
        if(nombre.trim() === '' || contrasena.trim() === ''|| comentario.trim() === ''){
            Alert.alert('Error','Por favor completa todos los campos');
            alert('Error: Por favor completa todos los campos');
            setMensaje('Faltan campos por llenar');
        } else {
            Alert.alert('Bieen !');
            alert('Bieen!');
            setMensaje('Bieen!');
        }
    };

return (
  
    <View style={styles.container}>
        <Text style={styles.title}></Text>
        {/* Nombre */}
        <TextInput style={styles.input}
        placeholder='Escribe tu nombre'
        value={nombre}
        onChangeText={setNombre}
        keyboardType='default'
        />

        {/* Constraseña */}
        <TextInput 
        style={styles.input}
        placeholder='Escribe tu contraseña'
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry={true}
        />

          {/* Varias líneas para comentario */}
        <TextInput 
        style={[styles.input, {height:100, textAlignVertical:'top'}]}
        placeholder='Escribe tu contraseña'
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
        />

        <Button title='Leer más' onPress={enviarMensaje}/>
        <Text style={styles.mensaje}>{mensaje}</Text>
    </View>
);
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#7cb5ffff', 
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    gap:10
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
   itemTitle: {
    color: "white",
    fontSize: 16,
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#a47bf7ff',
    padding:12,
    borderRadius:9
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#e431f1ff',
    textAlign:'center'
  }
});
