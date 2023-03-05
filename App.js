import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Navigation from "./src/Navigation";



export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    
  },
});
