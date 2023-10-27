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
import { AuthNavigatorParams } from "../../../navigation/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { TitleAndParagraph } from "../../../components/TitleAndParagraph";
import { TextAndClickableText } from "../../../components/TextAndClickableText";

type Props = NativeStackScreenProps<AuthNavigatorParams>;
export const MobileLoginPage = ({ navigation }: Props) => {
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
        <ContentWrapper rowGap={8}>
          <View style={styles.logo}>
            <Typography version="heading6">TrainX</Typography>
          </View>
          <View style={styles.pic}></View>
          <TitleAndParagraph title={t("login")} paragraph={t("enterMobile&Passsword")} />
          <PhoneInput name="phoneNumber" control={control} />
          <PasswordInput name="password" control={control} />
          <ClickableText version="boldLabel" text={t("forgotPassword?")} color={theme.colors.primary} />
        </ContentWrapper>
      </ScrollContainer>
      <Footer>
        <LongButton version="primary" title={t("login")} onPress={handleSubmit(SubmitHandle)} />
        <TextAndClickableText
          alignSelfCenter
          text={t("haveNoAccount?")}
          clickableText={t("createAccount")}
          onClickableTextPress={() => {
            navigation.navigate("SignupFields");
          }}
        />
      </Footer>
    </SafeAreaContainer>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: { flex: 1, position: "relative" },
    //TODO: remove this when creating the svg
    logo: {
      margin: 8,
      alignSelf: "center",
    },
    //TODO: remove this when creating the svg
    pic: {
      height: 300,
      backgroundColor: theme.colors.primary,
      borderRadius: 16,
      margin: 16,
      borderWidth: 2,
      borderColor: theme.colors.black,
    },
  });
