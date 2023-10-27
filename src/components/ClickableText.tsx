import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Typography, TypographyProps } from "./Typography";
import React from "react";

type ClickableTextProps = React.ComponentProps<typeof Pressable> &
  TypographyProps & {
    text: string;
  };

const ClickableText = (props: ClickableTextProps) => {
  const { version, color, text, ...pressableProps } = props;
  return (
    <Pressable {...pressableProps}>
      <Typography version={version} color={color}>
        {text}
      </Typography>
    </Pressable>
  );
};

export default ClickableText;
