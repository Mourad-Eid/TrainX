import { StyleProp, View, ViewStyle } from "react-native";
import React from "react";

type FooterProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  rowGap?: number;
};
export const Footer = (props: FooterProps) => {
  return (
    <View
      style={[
        {
          paddingBottom: 24,
          flexDirection: "column",
          justifyContent: "flex-start",
          rowGap: props.rowGap ?? 8,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};
