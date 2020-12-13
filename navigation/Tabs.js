import { createNavigatorFactory } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Icon from "../components/Icon";
import images from "../constants/images";
import icons from "../constants/icons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={icons.cutlery} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="discover"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={icons.search} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={icons.like} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={icons.user} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
