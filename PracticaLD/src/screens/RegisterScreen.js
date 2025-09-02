import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, database } from "../config/firebase";
import styles from "../styles/globalStyles";

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    specialty: ""
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await setDoc(doc(database, "users", userCredential.user.uid), {
        ...form,
        createdAt: new Date()
      });
      Alert.alert("Registro exitoso");
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.registerContainer}>
      <Text style={styles.registerTitle}>Crear Cuenta</Text>

      <View style={styles.registerCard}>
        <TextInput
          style={styles.registerInput}
          placeholder="Nombre"
          placeholderTextColor="#999"
          onChangeText={(v) => handleChange("name", v)}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Correo"
          placeholderTextColor="#999"
          onChangeText={(v) => handleChange("email", v)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#999"
          onChangeText={(v) => handleChange("password", v)}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Edad"
          placeholderTextColor="#999"
          keyboardType="numeric"
          onChangeText={(v) => handleChange("age", v)}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Especialidad"
          placeholderTextColor="#999"
          onChangeText={(v) => handleChange("specialty", v)}
        />
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.registerLink} onPress={() => navigation.navigate("Login")}>
        ¿Ya tienes cuenta? <Text style={styles.registerLinkBold}>Inicia sesión</Text>
      </Text>
    </ScrollView>
  );
}
