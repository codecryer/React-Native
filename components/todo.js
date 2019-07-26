import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Todo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Menu </Text>
          <Text style={styles.headerText}> Todo App </Text>
          <Text style={styles.headerText}> Settings </Text>
        </View>
        {/* Header view*/}
        <View style={{ flex: 5 }} />
        {/* Footer view*/}
        <View style={{ flex: 1, backgroundColor: "orange" }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    color: "white",
    fontSize: 20
  },
  headerContainer: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "orange",
    alignItems: "flex-end"
  }
});
