import { StyleSheet, View } from "react-native";
import React from "react";
import { Typography } from "./Typography";
import { useAppTheme } from "../theme/theme";

type Props = {
  title: string;
  paragraph: string;
  rowGap?: number;
};

export const TitleAndParagraph = ({ title, paragraph, rowGap }: Props) => {
  const theme = useAppTheme();
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-around",
        rowGap: rowGap ?? 4,
      }}
    >
      <Typography version="heading6">{title}</Typography>
      <Typography version="label" color={theme.colors.black50}>
        {paragraph}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({});
