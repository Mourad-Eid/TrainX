import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Typography, TypographyProps } from "./Typography";
import React from "react";

type ClickableTextProps = React.ComponentProps<typeof Pressable> &
  TypographyProps & {
    text: string;
    style?: StyleProp<ViewStyle>;
  };

const ClickableText = (props: ClickableTextProps) => {
  const { version, color, text, style, ...pressableProps } = props;
  return (
    <Pressable {...pressableProps}>
      <Typography style={style} version={version} color={color}>
        {text}
      </Typography>
    </Pressable>
  );
};

export default ClickableText;
