import { useTranslation } from "react-i18next";
import { Controller, FieldValues } from "react-hook-form";
import { useAppTheme } from "../../theme/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FieldInput } from "./FieldInput";
import { InputProps } from "./types";
import { useState } from "react";
import { EyeIcon } from "./EyeIcon";

export const PasswordConfirmInput = <TFieldValues extends FieldValues = FieldValues>(
  props: InputProps<TFieldValues>,
) => {
  const { t } = useTranslation();
  const { control, name, confirmName, getValues, ...inputprops } = props;
  const theme = useAppTheme();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown((prev) => !prev);
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        validate: (value) => {
          let password: string;
          if (getValues && confirmName) {
            password = getValues(confirmName);
          } else {
            password = "";
          }
          return password === value ? true : t("confirmPasswordMustMatch");
        },
        required: t("passwordIsRequired"),
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <FieldInput
            leftIcon={
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color={error ? theme.colors.error : theme.colors.black50}
              />
            }
            rightIcon={<EyeIcon togglePasswordShown={togglePasswordShown} passwordShown={passwordShown} />}
            label={t("password")}
            error={error}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="default"
            placeholder={t("password")}
            secureTextEntry={!passwordShown}
            {...inputprops}
          />
        );
      }}
    />
  );
};
