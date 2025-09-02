import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../styles/globalStyles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Inicio de sesión exitoso");
      navigation.replace("Loading");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.loginContainer}>
      {/* Logo o ícono arriba */}
      <Image 
        source={require("../../assets/icon.png")} 
        style={styles.loginLogo}
      />

      <Text style={styles.loginTitle}>Inicia Sesión</Text>

      <View style={styles.loginCard}>
        <TextInput
          style={styles.loginInput}
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#999"
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.loginLink} onPress={() => navigation.navigate("Register")}>
        ¿No tienes cuenta? <Text style={styles.loginLinkBold}>Regístrate aquí</Text>
      </Text>
    </View>
  );
}
