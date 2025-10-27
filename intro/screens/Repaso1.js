import React, { useState, useEffect, useRef } from "react";
import SwitchBu from "./Botones/Switch";
import {
  View,
  Text,
  TextInput,
  Alert,
  Button,
  Animated,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function Repaso1() {
  const [showMain, setShowMain] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);


  const info = [
    {
      id: 1,
      title: "Aceptar términos y condiciones",
      value: false,
    },
  ];

     
    const enviarMensaje = () => {
        if (nombre.trim() === "" || correo.trim() === "") {
            Alert.alert("Error", "Por favor completa todos los campos");
            alert("Error, por favor completa todos los campos");
            setMensaje("Faltan campos por llenar");
            } 
    else if (!correo.includes("@") || !correo.includes(".")) {
            Alert.alert("Error", "Por favor ingresa un correo válido");
            alert("Error, el formato del correo no es válido");
            setMensaje("Correo inválido. Ejemplo: usuario@correo.com");
        } 
    else if (!aceptaTerminos) {
            Alert.alert("Aviso", "Debes aceptar los términos y condiciones");
            alert("Aviso, debes aceptar los términos y condiciones");
            setMensaje("Debes aceptar los términos para continuar");
        } 
    else {
            Alert.alert("Bien!", "Registro enviado correctamente");
            alert("Bien! Registro enviado correctamente");
            setMensaje("¡Bien!");
        }
    };



  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start();

    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(async () => {
        await SplashScreen.hideAsync();
        setShowMain(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

if (showMain) {
  return (
    <ImageBackground
      source={require("../assets/47eef3bdad0c197df0707d35f4ffc4d2.jpg")} // 👈 coloca aquí tu imagen
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Registro de usuario</Text>

        {/* Nombre */}
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre completo"
          value={nombre}
          onChangeText={setNombre}
          keyboardType="default"
        />

        {/* Correo */}
        <TextInput
          style={styles.input}
          placeholder="Escribe tu correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        {/* Switch */}
        {info.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <SwitchBu
              temporal={item.value}
              isButton={true}
              onChange={setAceptaTerminos}
            />
          </View>
        ))}

        <Button title="Registrarse" onPress={enviarMensaje} />
        <Text style={styles.mensaje}>{mensaje}</Text>
      </View>
    </ImageBackground>
  );
}

  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/download (1).jpg")}
        resizeMode="contain"
        style={[
          styles.logoImage,
          {
            opacity: fadeLogo,
            transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
          },
        ]}
      />
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: slideText }] }]}
      >
        ¡Repaso 1!
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "90%",
    padding: 10,
    marginVertical: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  itemTitle: {
    color: "white",
    fontSize: 16,
  },
  mensaje: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
  title: {
    color: "white",
    fontSize: 22,
    marginBottom: 20,
  },
  logoImage: {
    width: 300,
    height: 300,
  },
  text: {
    color: "white",
    fontSize: 28,
    marginTop: 10,
  },
  background: {
  flex: 1,
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  },
  overlay: {
  flex: 1,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.4)", // capa semitransparente
  padding: 20,
},

});