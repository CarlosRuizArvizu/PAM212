import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import textInput from './TextInput';

import { Button, TextInput } from 'react-native';



export default function MenuScreen() {
    const [screen, setScreen]=useState('menu');
    switch(screen) {
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textInput':
            return <TextInput/>;
        case 'ImageBackgroung':
            return <ImageBackgroung/>;                
        case 'menu':
            default: 
                return (
                    <View style={styles.container}>
                    <View>
                        <Text>Menu de Practicas</Text>
                        <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                        <Button onPress={()=>setScreen('botones')} title='Pract:Botones'/>
                        <Button onPress={()=>setScreen('textInput')} title='Pract:TextInput'/>
                        <Button onPress={()=>setScreen('ImageBackgroung')} title='Pract:ImageBackgroung'/>
                        <Button onPress={()=>setScreen('ScrollView')} title='Pract:ScrollView'/>
                        <Button onPress={()=>setScreen('ActivityIndicator')} title='Pract:ActivityIndicator'/>
                        <Button onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
                        <Button onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
                        <Button onPress={()=>setScreen('BottomSheet')} title='Pract:BottomSheet'/>
                    </View>
                    </View>
    )

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7cb5ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});