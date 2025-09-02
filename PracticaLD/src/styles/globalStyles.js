import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ---- CONTENEDORES GENERALES ----
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 20,
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F8F9FB",
    padding: 20,
    justifyContent: "center",
  },

  // ---- CARD ----
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
  },

  // ---- TITULOS Y TEXTOS ----
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#d9534f",
    marginBottom: 15,
    textAlign: "center",
  },

  // ---- INPUTS ----
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: "100%",
  },

  // ---- BOTONES ----
  button: {
    backgroundColor: "#555555",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonPrimary: {
    backgroundColor: "#0066cc",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonSecondary: {
    backgroundColor: "#E5E5E5",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDanger: {
    backgroundColor: "#dc3545",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonSecondaryText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },

  // ---- LINKS ----
  link: {
    color: "#555555",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
  },

  // ---- IMÁGENES ----
  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#0066cc",
  },

  // ---- HOME ----
  actions: {
    marginTop: 30,
    width: "100%",
    gap: 12,
  },

  // ---- LOADING ----
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },

  // ---- SPLASH ----
  splashContainer: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    justifyContent: "center",
    alignItems: "center",
  },
  splashAnimation: {
    width: 180,
    height: 180,
  },
  splashText: {
    marginTop: 25,
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  // ---- LOGIN SCREEN BONITO ----
loginContainer: {
  flex: 1,
  backgroundColor: "#f9fafc",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
},
loginLogo: {
  width: 100,
  height: 100,
  marginBottom: 20,
  borderRadius: 20,
},
loginTitle: {
  fontSize: 26,
  fontWeight: "700",
  color: "#222",
  marginBottom: 25,
},
loginCard: {
  backgroundColor: "#fff",
  width: "100%",
  borderRadius: 16,
  padding: 20,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 4,
},
loginInput: {
  backgroundColor: "#f5f5f5",
  borderRadius: 10,
  padding: 14,
  marginBottom: 15,
  fontSize: 16,
  color: "#333",
  borderWidth: 1,
  borderColor: "#ddd",
},
loginButton: {
  backgroundColor: "#0066cc",
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
  shadowColor: "#0066cc",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 3,
},
loginButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},
loginLink: {
  color: "#666",
  textAlign: "center",
  marginTop: 20,
  fontSize: 14,
},
loginLinkBold: {
  color: "#0066cc",
  fontWeight: "600",
},
// ---- REGISTER SCREEN BONITO ----
registerContainer: {
  flexGrow: 1,
  backgroundColor: "#f9fafc",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
},
registerTitle: {
  fontSize: 26,
  fontWeight: "700",
  color: "#222",
  marginBottom: 25,
  textAlign: "center",
},
registerCard: {
  backgroundColor: "#fff",
  width: "100%",
  borderRadius: 16,
  padding: 20,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 4,
},
registerInput: {
  backgroundColor: "#f5f5f5",
  borderRadius: 10,
  padding: 14,
  marginBottom: 15,
  fontSize: 16,
  color: "#333",
  borderWidth: 1,
  borderColor: "#ddd",
},
registerButton: {
  backgroundColor: "#28a745",
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
  shadowColor: "#28a745",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 3,
},
registerButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},
registerLink: {
  color: "#666",
  textAlign: "center",
  marginTop: 20,
  fontSize: 14,
},
registerLinkBold: {
  color: "#28a745",
  fontWeight: "600",
},


});
