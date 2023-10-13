import { Button, StyleSheet, View } from "react-native";
import { Typography } from "../../components/Typography";
import { useTranslation } from "react-i18next";
import { toggleLanguage } from "../../../i18n/i18n";
import { PhoneInput } from "../../components/InputTexts/PhoneInput";
import { useForm } from "react-hook-form";
import { EmailInput } from "../../components/InputTexts/EmailInput";
import { NameInput } from "../../components/InputTexts/NameInput";
import { PasswordInput } from "../../components/InputTexts/PasswordInput";
import { LongButton } from "../../components/LongButton";

type LoginData = {
  phoneNumber: string;
  name: string;
  email: string;
  password: string;
};

export const HomePage = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      phoneNumber: "",
      name: "",
      email: "",
      password: "",
    },
  });

  const SubmitHandle = (data: LoginData) => {
    console.log("enterted credentials: ", data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.redView}></View>
      <Typography version="heading5" color="#895559">
        {t("homePage")}
      </Typography>
      <LongButton version="primary" title="Testing Button" />
      <PhoneInput name="phoneNumber" control={control} />
      <EmailInput name="email" control={control} />
      <NameInput name="name" control={control} />
      <PasswordInput name="password" control={control} />
      <Button title={t("changeLanguage")} onPress={toggleLanguage} />
      <LongButton version="primary" title={t("submit")} onPress={handleSubmit(SubmitHandle)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  redView: {
    height: 100,
    width: "50%",
    backgroundColor: "red",
  },
});
