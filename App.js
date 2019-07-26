import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Likes from "./components/likes";
import Todo from "./components/todo";
import Flex from "./components/flex";

export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F0A"
  }
});
