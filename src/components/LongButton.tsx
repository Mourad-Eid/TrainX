import { Pressable, StyleSheet, View } from "react-native";
import { AppTheme, useAppTheme } from "../theme/theme";
import { Typography } from "./Typography";
import React from "react";

type StyledButtonProps = React.ComponentProps<typeof Pressable> & {
  version: "primary" | "secondary" | "tertiary" | "danger";
  icon?: React.ReactNode;
  title: string;
};

export const LongButton = (props: StyledButtonProps) => {
  const { version, icon, title: buttonText, ...buttonProps } = props;
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable
      style={({ pressed }) => [styles.basic, styles[version], { opacity: pressed ? 0.5 : 1 }]}
      {...buttonProps}
    >
      {icon && <View style={styles.icon}>{icon}</View>}
      <Typography
        version="subHeader"
        color={version === "secondary" ? theme.colors.primary : theme.colors.black5}
      >
        {buttonText}
      </Typography>
    </Pressable>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    basic: {
      paddingHorizontal: 8,
      flexDirection: "row",
      marginVertical: 4,
      marginHorizontal: 8,
      borderRadius: 8,
      height: 40,
      color: theme.colors.black5,
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 2,
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      position: "absolute",
      left: 16,
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      backgroundColor: theme.colors.black5,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      color: theme.colors.primary,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    tertiary: {
      backgroundColor: theme.colors.warning,
    },
    danger: {
      backgroundColor: theme.colors.error,
    },
  });
