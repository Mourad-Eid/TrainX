import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type FooterProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
export const Footer = (props: FooterProps) => {
  return <View style={[styles.basic, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  basic: {
    paddingBottom: 24,
  },
});
