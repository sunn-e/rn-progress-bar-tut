//import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PROGRESS BARRRRRRRRRRRRRRRRRRRRR</Text>
      <ProgressBar progress={0.5} color={Colors.red800} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
