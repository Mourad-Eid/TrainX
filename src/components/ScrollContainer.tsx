import { StyleSheet, ScrollView } from "react-native";
import React from "react";

type ScreenContainerProps = {
  children: React.ReactNode;
};

export const ScrollContainer = (props: ScreenContainerProps) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
