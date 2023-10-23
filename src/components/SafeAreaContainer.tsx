import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";

type ScreenContainerProps = {
  children: React.ReactNode;
};

export const SafeAreaContainer = (props: ScreenContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 8 },
});
