import { useTranslation } from "react-i18next";
import { Controller, FieldValues } from "react-hook-form";
import { useAppTheme } from "../../theme/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Pressable, View } from "react-native";
import { FieldInput } from "./FieldInput";
import { InputProps } from "./types";
import { useState } from "react";

type EyeIconProps = React.ComponentProps<typeof Pressable> & {
  togglePasswordShown: () => void;
  passwordShown: boolean;
};

const EyeIcon = (props: EyeIconProps) => {
  const theme = useAppTheme();
  return (
    <Pressable onPress={props.togglePasswordShown}>
      <Ionicons name={props.passwordShown ? "eye-outline" : "eye-off-outline"} size={24} color={theme.colors.black50} />
    </Pressable>
  );
};

export const PasswordInput = <TFieldValues extends FieldValues = FieldValues>(props: InputProps<TFieldValues>) => {
  const { t } = useTranslation();
  const { control, name, ...inputprops } = props;
  const theme = useAppTheme();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    const eye = passwordShown;
    setPasswordShown(!eye);
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: t("passwordIsRequired"),
        minLength: {
          value: 8,
          message: t("pass8CharsError"),
        },
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <FieldInput
            leftIcon={
              <MaterialCommunityIcons name="lock-outline" size={24} color={error ? theme.colors.error : theme.colors.black50} />
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
