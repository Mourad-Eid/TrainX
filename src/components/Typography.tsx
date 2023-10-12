import { StyleProp, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";
import { Text } from "react-native-paper";
import { AppTheme, useAppTheme } from "../theme/theme";

type TypographyVersions =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "subHeading"
  | "paragraph"
  | "labelBig"
  | "label";

type TypographyProps = {
  version: TypographyVersions;
  color?: string;
};

export const Typography = ({ version, color = "#000000", children }: PropsWithChildren<TypographyProps>) => {
  const theme = useAppTheme();
  return <Text style={[styles[version], { color: color }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 68,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading2: {
    fontSize: 51,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading3: {
    fontSize: 38,
    fontWeight: "300",
    fontFamily: "Rubik",
  },
  heading4: {
    fontSize: 29,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading5: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading6: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Rubik",
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "Rubik",
  },
  labelBig: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Rubik",
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Rubik",
  },
});
