import { PropsWithChildren } from "react";
import { Text } from "react-native-paper";
import { useAppTheme } from "../theme/theme";
import { StyleProp, View, ViewStyle } from "react-native";

type TypographyVersions =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "subHeader"
  | "paragraph"
  | "labelBig"
  | "label"
  | "boldLabel";

export type TypographyProps = {
  version: TypographyVersions;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export const Typography = ({
  version,
  style,
  color = "#000000",
  children,
}: PropsWithChildren<TypographyProps>) => {
  const theme = useAppTheme();
  return (
    <View style={style}>
      <Text style={[theme.fonts[version], { color: color }]}>{children}</Text>
    </View>
  );
};
