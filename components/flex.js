import React, { Component } from "react";
import { View, Text } from "react-native";
const Flex = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#000501" }} />
      <View style={{ flex: 2, backgroundColor: "orange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      <View style={{ flex: 4, backgroundColor: "blue" }} />
    </View>
  );
};
export default Flex;
