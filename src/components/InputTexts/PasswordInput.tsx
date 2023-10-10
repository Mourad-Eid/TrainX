import { useTranslation } from "react-i18next";
import { Controller, FieldValues } from "react-hook-form";
import { useAppTheme } from "../../theme/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FieldInput } from "./FieldInput";
import { InputProps } from "./InputProps";

export const PasswordInput = <TFieldValues extends FieldValues = FieldValues>(
  props: InputProps<TFieldValues>,
) => {
  const { t } = useTranslation();
  const { control, name, ...inputprops } = props;
  const theme = useAppTheme();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: t("passwordIsRequired").toString(),
        minLength: {
          value: 8,
          message: t("pass8CharsError"),
        },
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
            label={t("password")}
            error={error}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="default"
            placeholder={t("password")}
            secureTextEntry
            {...inputprops}
          />
        );
      }}
    />
  );
};
