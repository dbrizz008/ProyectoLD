import React, { useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { auth, database } from "../config/firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import styles from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        navigation.replace("Login");
        return;
      }

      const docSnap = await getDoc(doc(database, "users", user.uid));
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo cargar la información del usuario");
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [navigation])
  );

  const handleLogout = () => {
    Alert.alert("Cerrar Sesión", "¿Estás seguro de que quieres cerrar sesión?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Cerrar Sesión",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut(auth);
            navigation.replace("Login");
          } catch (error) {
            Alert.alert("Error", "No se pudo cerrar la sesión: " + error.message);
            console.error("Error signing out:", error);
          }
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>No se pudo cargar la información del usuario</Text>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.replace("Login")}>
          <Text style={styles.buttonText}>Ir a Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>


        <Text style={styles.title}>Bienvenido, {userData.name}</Text>

        <Text style={styles.infoText}>Edad: {userData.age} años</Text>
        <Text style={styles.infoText}>Especialidad: {userData.specialty}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate("EditProfile")}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDanger} onPress={handleLogout}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
