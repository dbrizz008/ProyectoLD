import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { auth, database } from "../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import styles from "../styles/globalStyles";

export default function EditProfileScreen({ navigation }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    specialty: "",

  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadUserData = async () => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const docSnap = await getDoc(doc(database, "users", user.uid));
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setForm({
            name: userData.name || "",
            email: userData.email || "",
            age: userData.age || "",
            specialty: userData.specialty || "",

          });
        }
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo cargar la información del perfil");
      console.error("Error loading user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadUserData();
    }, [])
  );

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      Alert.alert("Error", "El nombre es obligatorio");
      return;
    }
    if (!form.email.trim()) {
      Alert.alert("Error", "El correo es obligatorio");
      return;
    }
    if (!form.age.trim()) {
      Alert.alert("Error", "La edad es obligatoria");
      return;
    }
    if (!form.specialty.trim()) {
      Alert.alert("Error", "La especialidad es obligatoria");
      return;
    }

    setSaving(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const updateData = {
          name: form.name.trim(),
          email: form.email.trim(),
          age: form.age.trim(),
          specialty: form.specialty.trim(),

          updatedAt: new Date(),
        };

        await updateDoc(doc(database, "users", user.uid), updateData);
        Alert.alert("Éxito", "Perfil actualizado correctamente");
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar el perfil: " + error.message);
      console.error("Error updating profile:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={{ marginTop: 10, color: "#333" }}>Cargando perfil...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>

  <Text style={styles.title}>Editar Perfil</Text>

        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#999"
          value={form.name}
          onChangeText={(value) => handleChange("name", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          value={form.email}
          onChangeText={(value) => handleChange("email", value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          placeholderTextColor="#999"
          value={form.age}
          onChangeText={(value) => handleChange("age", value)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Especialidad"
          placeholderTextColor="#999"
          value={form.specialty}
          onChangeText={(value) => handleChange("specialty", value)}
        />


        {/* Botones */}
        <TouchableOpacity
          style={[styles.buttonPrimary, saving && { opacity: 0.7 }]}
          onPress={handleSave}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Guardar Cambios</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.goBack()}
          disabled={saving}
        >
          <Text style={styles.buttonSecondaryText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
