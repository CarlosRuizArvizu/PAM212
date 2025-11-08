import { ScrollView, Text, StyleSheet, TextInput, View } from 'react-native-web'
import React from 'react'

const DATA = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
];

const SimpleHeader = () => {
  return(
  <View style = {styles.header}>
    <Text style = {styles.title}>QNews</Text>
  </View>
);
};

const SimpleScrollView = () => {
  return (
    <View>
    <SimpleHeader/>
    <ScrollView
     showVerticalScrollIndicator={false}
    >
      {DATA.map((item) => {
        return (
          <View style={styles.card} key = {item.id}>
          <Text style = {styles.subtitle}> ¡Soy una tarjeta! </Text>
          </View>
        );
      })}
    </ScrollView>
    </View>
  );
};

export default  SimpleScrollView;

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: 'rgba(71, 44, 176, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  title:{
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize: 20
  },
  card:{
    height: 100,
    backgroundColor: '#341c83ff',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    color: '#ffffffff',
    fontWeight: 'bold',
  },
})