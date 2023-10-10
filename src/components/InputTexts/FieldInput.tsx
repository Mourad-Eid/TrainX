import { I18nManager, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { AppTheme, useAppTheme } from "../../theme/theme";
import { Typography } from "../Typography";
import { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

type StyledTextInputProps = React.ComponentProps<typeof TextInput> & {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: FieldError | undefined;
};

export const FieldInput = (props: StyledTextInputProps) => {
  const { leftIcon, rightIcon, error, label } = props;
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.inputContainer}>
      <Typography version="label">{label}</Typography>
      <View
        style={[styles.inputFieldView, { borderColor: error ? theme.colors.error : theme.colors.black50 }]}
      >
        {leftIcon}
        <TextInput style={styles.inputField} {...props} />
        {rightIcon}
      </View>
      {error && (
        <Typography color="red" version="label">
          {error.message || t("anErrorOccurred")}
        </Typography>
      )}
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    inputField: {
      flex: 1,
      padding: 4,
      fontSize: 14,
      fontWeight: "400",
      textAlign: I18nManager.isRTL ? "right" : "left",
    },
    inputContainer: { marginHorizontal: 8, marginVertical: 4 },

    inputFieldView: {
      borderRadius: 12,
      borderWidth: 0.5,
      borderColor: theme.colors.black50,
      paddingHorizontal: 8,
      paddingVertical: 4,
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 4,
      height: 40,
    },
  });
