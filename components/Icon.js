import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../constants/theme";

export default function Icon({ source, focused, width = 25, height = 25 }) {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        top: focused ? -20 : 0,
      }}
    >
      <Image
        source={source}
        style={{
          width: width,
          height: height,
          tintColor: focused ? COLORS.primary : COLORS.secondary,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
