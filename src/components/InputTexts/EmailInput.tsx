import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Controller, FieldValues } from "react-hook-form";
import { useAppTheme } from "../../theme/theme";
import { InputProps } from "./types";
import { FieldInput } from "./FieldInput";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const EmailInput = <TFieldValues extends FieldValues = FieldValues>(props: InputProps<TFieldValues>) => {
  const { t } = useTranslation();
  const { control, name, ...inputprops } = { ...props };
  const theme = useAppTheme();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: t("emailIsRequired"),
        pattern: { value: EMAIL_REGEX, message: t("emailIsInvalid") },
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <FieldInput
            leftIcon={<Ionicons name="mail-outline" size={24} color={error ? theme.colors.error : theme.colors.black50} />}
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
