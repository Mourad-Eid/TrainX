import { StyleSheet, View } from "react-native";
import React from "react";
import { Typography } from "../../../components/Typography";
import { AppTheme, useAppTheme } from "../../../theme/theme";
import { useTranslation } from "react-i18next";
import { LongButton } from "../../../components/LongButton";
import { ScrollContainer } from "../../../components/ScrollContainer";
import { useForm } from "react-hook-form";
import { SafeAreaContainer } from "../../../components/SafeAreaContainer";
import { Footer } from "../../../components/Footer";
import { AuthNavigatorParams } from "../../../navigation/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { TitleAndParagraph } from "../../../components/TitleAndParagraph";
import { OTPInput } from "../../../components/InputTexts/OTPInput";
import { TextAndClickableText } from "../../../components/TextAndClickableText";

type Props = NativeStackScreenProps<AuthNavigatorParams>;
export const EmailOTP = ({ navigation, route }: Props) => {
  const userSignupData = route.params;
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      OTP: "",
    },
  });

  const SubmitHandle = (data: { OTP: string }) => {
    //TODO: check if otp is correct here then signup user using userSignupData
    console.log("Received user data: ", userSignupData);
    console.log("enterted credentials: ", data);
    navigation.navigate("SignupSuccess");
  };
  return (
    <SafeAreaContainer>
      <ScrollContainer>
        <ContentWrapper rowGap={8}>
          <View style={styles.logo}>
            <Typography version="heading6">TrainX</Typography>
          </View>
          <TitleAndParagraph title={t("signup")} paragraph={t("otpSentToEmail")} rowGap={4} />
          <OTPInput name="OTP" control={control} />
          <TextAndClickableText
            text={t("noEmailArrived?")}
            clickableText={t("resendOTP")}
            onClickableTextPress={() => {
              //TODO: call the api to resend OTP here
            }}
          />
        </ContentWrapper>
      </ScrollContainer>
      <Footer>
        <LongButton version="primary" title={t("next")} onPress={handleSubmit(SubmitHandle)} />
      </Footer>
    </SafeAreaContainer>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    //TODO: remove this when creating the svg
    logo: {
      margin: 8,
      alignSelf: "center",
    },
  });
