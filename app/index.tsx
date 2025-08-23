// app/index.tsx
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Button,
  Image,
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
                  <Text style={styles.buttonTextt}>Check Availability</Text>
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
            {/* Rating */}
            <View style={styles.ratingContainer}>
              <View style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <MaterialIcons
                    key={i}
                    name="star"
                    size={20}
                    color="#FFC107"
                  />
                ))}
              </View>
              <Text style={styles.ratingText}>
                Rated 4.9 out of 5 - based on 1790 reviews
              </Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>
              {"Fast, Reliable, and Affordable Hosting Solutions"}
            </Text>

            {/* Description */}
            <Text style={styles.descriptionn}>
              {
                "Join our 20,000+ customers who enjoy fast hosting and outstanding\nsupport. Whether you’re new to websites and hosting or a seasoned\nexpert, our support team is ready to help you every step of the\nway."
              }
            </Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.buttonText}>see hosting plans</Text>
                <MaterialIcons name="arrow-drop-down" size={16} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>
                  speak to an expert
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/happyperson.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
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
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  stars: {
    flexDirection: "row",
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "400",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 16,
    lineHeight: 32,
  },
  descriptionn: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#0084ff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextt: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#0084ff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    color: "#0084ff",
    fontSize: 14,
    fontWeight: "500",
  },
  imageContainer: {
    flex: 1,
    width: 250,
    height: 350,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 350,
    resizeMode: "contain",
  },
  buttonGroup: {
    flex: 1,
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
