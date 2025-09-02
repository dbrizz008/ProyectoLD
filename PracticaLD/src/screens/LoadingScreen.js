import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../styles/globalStyles";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 3000); // La animación dura 3 segundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
}
