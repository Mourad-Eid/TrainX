import React from "react";
import { useTranslation } from "react-i18next";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useAppTheme } from "../../theme/theme";
import { InputProps } from "./InputProps";
import { FieldInput } from "./FieldInput";

export const NameInput = <TFieldValues extends FieldValues = FieldValues>(
  props: InputProps<TFieldValues>,
) => {
  const { t } = useTranslation();
  const { control, name, ...inputprops } = { ...props };
  const theme = useAppTheme();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: t("nameIsRequired").toString(),
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <FieldInput
            leftIcon={
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                color={error ? theme.colors.error : theme.colors.black50}
              />
            }
            label={t("name")}
            error={error}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="default"
            placeholder={t("name")}
            {...inputprops}
          />
        );
      }}
    />
  );
};
