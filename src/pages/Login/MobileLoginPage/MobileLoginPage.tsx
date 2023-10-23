import { StyleSheet, View } from "react-native";
import React from "react";
import { Typography } from "../../../components/Typography";
import { AppTheme, useAppTheme } from "../../../theme/theme";
import { useTranslation } from "react-i18next";
import { LongButton } from "../../../components/LongButton";
import { ScrollContainer } from "../../../components/ScrollContainer";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../../components/InputTexts/PasswordInput";
import ClickableText from "../../../components/ClickableText";
import { SafeAreaContainer } from "../../../components/SafeAreaContainer";
import { PhoneInput } from "../../../components/InputTexts/PhoneInput";
import { Footer } from "../../../components/Footer";
import { NoAccountCreate } from "../Shared/NoAccountCreate";

export const MobileLoginPage = () => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const SubmitHandle = (data: { phoneNumber: string; password: string }) => {
    console.log("enterted credentials: ", data);
  };
  return (
    <SafeAreaContainer>
      <ScrollContainer>
        <View style={styles.logo}>
          <Typography version="heading6">TrainX</Typography>
        </View>
        <View style={styles.pic}></View>
        <Typography version="heading6" style={{ marginBottom: 4 }}>
          {t("login")}
        </Typography>
        <Typography version="label" color={theme.colors.black50} style={{ marginBottom: 4 }}>
          {t("enterMobile&Passsword")}
        </Typography>
        <PhoneInput name="phoneNumber" control={control} />
        <PasswordInput name="password" control={control} />
        <ClickableText
          version="boldLabel"
          text={t("forgotPassword?")}
          color={theme.colors.primary}
          style={{ margin: 4 }}
        />
      </ScrollContainer>
      <Footer>
        <LongButton version="primary" title={t("login")} onPress={handleSubmit(SubmitHandle)} />
        <NoAccountCreate />
      </Footer>
    </SafeAreaContainer>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: { flex: 1, position: "relative" },
    logo: {
      margin: 8,
      alignSelf: "center",
    },
    pic: {
      height: 300,
      backgroundColor: theme.colors.primary,
      borderRadius: 16,
      margin: 16,
      borderWidth: 2,
      borderColor: theme.colors.black,
    },
  });
