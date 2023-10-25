import { StyleSheet, ScrollView, StyleProp, ViewStyle } from "react-native";
import React from "react";

type ScreenContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const ScrollContainer = (props: ScreenContainerProps) => {
  return (
    <ScrollView style={[styles.container, props.style]} showsVerticalScrollIndicator={false}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginDown: 8,
    flex: 1,
    paddingHorizontal: 16,
  },
});
