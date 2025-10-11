import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

//2. Main: Zona de componentes
export default function App() {

  const[contador, setContador]=useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>
      <View style={styles.contenedorBotones}>
      <Button color='green'title='Sumar' onPress={()=>setContador(contador+1)}/>
      <Button color='red'title='Restar' onPress={()=>setContador(contador-1)}/>
      <Button color='blue'title='Reiniciar' onPress={()=>setContador(contador-contador)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//3. Estilos: Zona de estética y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7cb5ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#0b0267',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },

  texto2:{
    color: '#b32506ff',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'400',
    textDecorationLine:'underline',
  },

  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:20,
  },
});