// app/index.tsx
import React from "react";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#8D99AE" }}>
      <View style={styles.container}>
        {/** Banner */}
        <View style={styles.bannerWrapper}>
          <ImageBackground
            source={require("../assets/images/kenyaflag2.jpg")}
            style={styles.banner}
          >
            <View style={styles.content}>
              {/* Headline */}
              <Text style={styles.bannerText}>
                Get your .co.ke domain Today!
              </Text>

              {/* Secondary Description */}
              <Text style={styles.description}>
                Secure your brand online today. Use the domain search below
                {"\n"}
                to grab your .co.ke at the best prices in Kenya!
              </Text>

              {/* Search Container */}
              <View style={styles.searchContainer}>
                <TextInput
                  placeholder="mydomain.co.ke"
                  style={styles.input}
                  defaultValue="www."
                  editable={false}
                  selectionColor="#000"
                />
                <TextInput
                  placeholder="mydomain.co.ke"
                  style={[styles.input, styles.inputRight]}
                  keyboardType="web-search"
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Check Availability</Text>
                </TouchableOpacity>
              </View>

              {/* CTA Footer */}
              <Text style={styles.ctaText}>
                Hurry! Offer ends 31 August 2025
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/** info+image */}
        <View style={styles.section}>
          <View style={styles.textContainer}>
            <Text>Some words of flattery here</Text>
          </View>
          <View style={styles.imageContainer}>
            <Text>An Image will go here</Text>
          </View>
        </View>

        {/** Functions + image */}
        <View style={styles.section}>
          <View style={styles.buttonGroup}>
            <Button title="Domain name suggestion" />
            <Button title="Check for cheapest domain" />
            <Button title="To figure out" />
          </View>
          <View style={styles.imageContainer}>
            <Text>An Image goes here</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const GAP = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  // --- Banner styles from copy.tsx ---
  bannerWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: GAP * 2,
  },
  banner: {
    width: "100%",
    height: 300,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  bannerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "white",
    marginBottom: 24,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "sans-serif-light",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 700,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#000",
  },
  inputRight: {
    marginLeft: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  button: {
    backgroundColor: "#8BC300",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  ctaText: {
    fontSize: 16,
    color: "white",
    marginTop: 16,
    fontFamily: "sans-serif-medium",
  },
  // --- Other sections ---
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: GAP,
    marginBottom: GAP,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGroup: {
    flex: 1,
    justifyContent: "space-around",
  },
});
