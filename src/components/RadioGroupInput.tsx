import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Typography } from "./Typography";
import { RadioButton } from "react-native-paper";
import { FieldError } from "react-hook-form";
import { useAppTheme } from "../theme/theme";
import { useTranslation } from "react-i18next";

type Props = React.ComponentProps<typeof RadioButton.Group> & {
  title: string;
  error?: FieldError;
};

export const RadioGroupInput = ({ title, error, onValueChange, value, ...radioGroupProps }: Props) => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  return (
    <View>
      <Typography version="label">{title}</Typography>
      <RadioButton.Group onValueChange={onValueChange} value={value} {...radioGroupProps}></RadioButton.Group>
      {error && (
        <Typography color={theme.colors.error} version="label">
          {error.message || t("anErrorOccurred")}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
