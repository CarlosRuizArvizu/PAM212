import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles Usuario</Text>
      <Text style={styles.sub}>Usando Navegacion Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  title:{
    fontSize:22,
    fontWeight:'bold'
  },
  sub:{
    marginTop:5,
    fontSize:16,
    color:'blue'
  }
});
