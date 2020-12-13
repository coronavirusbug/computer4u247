import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import AppText from "./AppText";
import Icon from "./Icon";

export default function CategoryItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container2}>
        <Icon
          source={require("../assets/icons/car.png")}
          width={20}
          height={20}
        />
        <AppText style={styles.textStyle}>name</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    backgroundColor: COLORS.primary,
    // selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SIZES.padding,
    // ...styles.shadow,
  },
  container2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
   
    // selectedCategory?.id == item.id ? COLORS.white : COLORS.lightGray,
  },
  textStyle: {
   marginTop: SIZES.padding,
   color: COLORS.white,
                            // (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
    // ...FONTS.body5
  }

});
