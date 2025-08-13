import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [domain, setDomain] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your .KE Domain</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter domain name"
        value={domain}
        onChangeText={setDomain}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({ pathname: "/search-results", params: { domain } })
        }
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push("/ai-name-gen")}
      >
        <Text style={styles.buttonText}>AI Name Generator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push("/hosting-finder")}
      >
        <Text style={styles.buttonText}>Find Hosting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1a73e8",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  secondaryButton: { backgroundColor: "#34a853" },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
