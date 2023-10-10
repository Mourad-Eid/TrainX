import { StyleSheet, View, TextInput } from "react-native";
import { TextInputProps } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typography } from "../Typography";
import { I18nManager } from "react-native";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { AppTheme, useAppTheme } from "../../theme/theme";
import { InputProps } from "./InputProps";
import { FieldInput } from "./FieldInput";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const EmailInput = <TFieldValues extends FieldValues = FieldValues>(props: InputProps<TFieldValues>) => {
  const { t } = useTranslation();
  const { control, name, ...inputprops } = { ...props };
  const theme = useAppTheme();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: t("emailIsRequired").toString(),
        pattern: { value: EMAIL_REGEX, message: t("emailIsInvalid") },
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <FieldInput
            leftIcon={
              <Ionicons
                name="mail-outline"
                size={24}
                color={error ? theme.colors.error : theme.colors.black50}
              />
            }
            label={t("email")}
            error={error}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="email-address"
            placeholder={t("email")}
            {...inputprops}
          />
        );
      }}
    />
  );
};

export default EmailInput;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    inputContainer: { margin: 8 },
    inputField: { marginVertical: 4 },
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
    input: {
      //borderWidth: 1,
      flex: 1,
      padding: 4,
      fontSize: 14,
      textAlign: I18nManager.isRTL ? "right" : "left",
    },
  });
