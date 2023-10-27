import { View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  rowGap?: number;
};

export const ContentWrapper = ({ children, rowGap }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        rowGap: rowGap ?? 8,
      }}
    >
      {children}
    </View>
  );
};
