import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppTheme } from "../theme/theme";
import { Typography } from "./Typography";
import ClickableText from "./ClickableText";

type Props = {
  text: string;
  clickableText: string;
  onClickableTextPress: (event: GestureResponderEvent) => void;
  alignSelfCenter?: boolean;
};

export const TextAndClickableText = ({
  text,
  clickableText,
  onClickableTextPress,
  alignSelfCenter,
}: Props) => {
  const theme = useAppTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: alignSelfCenter ? "center" : "flex-start",
      }}
    >
      <Typography version="label">{text} </Typography>
      <ClickableText
        version="boldLabel"
        text={clickableText}
        color={theme.colors.primary}
        onPress={onClickableTextPress}
      />
    </View>
  );
};
