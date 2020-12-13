import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../constants/theme";

export default function AppText({ children, size }) {
  return <Text style={size}>{children}</Text>;
}
