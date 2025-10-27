import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import TextInputScreen from './TextInput';
import ImageBackgroundScreen from './ImageBackground';
import ScrollViewScreen from './ScrollView';
import ActivityIndicatorScreen from './ActivityIndicator';
import FlatListScreen from './FlatList';
import ModalScreen from './Modal';
import BottomSheetScreen from './BottomSheet';
import Repaso1Screen from './Repaso1';
import ScrollView2 from './ScrollView2';



export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');


  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'textInput':
      return <TextInputScreen />;
    case 'ImageBackground':
      return <ImageBackgroundScreen />;
    case 'ScrollView':
      return <ScrollViewScreen />;
    case 'ActivityIndicator':
      return <ActivityIndicatorScreen />;
    case 'FlatList':
      return <FlatListScreen />;
    case 'Modal':
      return <ModalScreen />;
    case 'BottomSheet':
      return <BottomSheetScreen />;
    case 'Repaso1':
      return <Repaso1Screen />;
    case 'ScrollView2':
      return <ScrollView2 />;
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>

          <Button title="Pract: Contador" onPress={() => setScreen('contador')} />
          <Button title="Pract: Botones" onPress={() => setScreen('botones')} />
          <Button title="Pract: TextInput" onPress={() => setScreen('textInput')} />
          <Button title="Pract: ImageBackground" onPress={() => setScreen('ImageBackground')} />
          <Button title="Pract: ScrollView" onPress={() => setScreen('ScrollView')} />
          <Button title="Pract: ScrollView 2" onPress={() => setScreen('ScrollView2')} />
          <Button title="Pract: ActivityIndicator" onPress={() => setScreen('ActivityIndicator')} />
          <Button title="Pract: FlatList" onPress={() => setScreen('FlatList')} />
          <Button title="Pract: Modal" onPress={() => setScreen('Modal')} />
          <Button title="Pract: BottomSheet" onPress={() => setScreen('BottomSheet')} />
          <Button title="Pract: Repaso 1" onPress={() => setScreen('Repaso1')} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffffff', 
    marginBottom: 20,
  },
});
