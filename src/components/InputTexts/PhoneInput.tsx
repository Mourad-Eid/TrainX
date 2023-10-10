import { useTranslation } from "react-i18next";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Controller, FieldValues } from "react-hook-form";
import { useAppTheme } from "../../theme/theme";
import { FieldInput } from "./FieldInput";
import { InputProps } from "./InputProps";

const PN_REGEX = /^01[0125][0-9]{8}$/;

export const PhoneInput = <TFieldValues extends FieldValues = FieldValues>(
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
        required: t("phoneIsRequired").toString(),
        pattern: { value: PN_REGEX, message: t("phoneIsInvalid") },
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <FieldInput
            leftIcon={
              <AntDesign name="mobile1" size={24} color={error ? theme.colors.error : theme.colors.black50} />
            }
            label={t("phoneNumber")}
            error={error}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="numeric"
            placeholder={t("phoneNumber")}
            {...inputprops}
          />
        );
      }}
    />
  );
};
