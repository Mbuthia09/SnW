import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../components/Button"; // assuming you created this

export default function HomeScreen() {
  const [domain, setDomain] = React.useState("");

  return (
    <LinearGradient colors={["#99cc92", "#66bb6a"]} style={styles.container}>
      <Text style={styles.title}>Find Your .KE Domain</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter domain name"
        value={domain}
        onChangeText={setDomain}
      />

      <CustomButton
        label="Search"
        route="/search-results"
        icon={require("../assets/images/search-icon.png")}
        params={{ domain }}
      />

      <CustomButton
        label="AI Name Generator"
        route="/ai-name-gen"
        icon={require("../assets/images/ai-icon.png")}
        secondary
      />

      <CustomButton
        label="Find Hosting"
        route="/hosting-finder"
        icon={require("../assets/images/hosting-icon.png")}
        secondary
      />
    </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
    
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      marginBottom: 25,
      textAlign: "center",
      color: "#000", // black like flag
      textTransform: "uppercase",
      letterSpacing: 1.5,
    },
    input: {
    borderWidth: 0,
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
    button: {
      backgroundColor: "#ff0000", // red base
      paddingVertical: 15,
      borderRadius: 30, // pill-shaped for modern look
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    secondaryButton: {
      backgroundColor: "#000", // black for contrast
      paddingVertical: 15,
      borderRadius: 30,
      marginBottom: 15,
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
      letterSpacing: 1,
    },
    
  });

