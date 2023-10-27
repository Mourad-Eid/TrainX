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
import { EmailInput } from "../../../components/InputTexts/EmailInput";

type Props = NativeStackScreenProps<AuthNavigatorParams>;
export const SignupEmail = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const SubmitHandle = (data: { email: string }) => {
    console.log("enterted credentials: ", data);
    navigation.navigate("EmailOTP");
  };
  return (
    <SafeAreaContainer>
      <ScrollContainer>
        <ContentWrapper rowGap={8}>
          <View style={styles.logo}>
            <Typography version="heading6">TrainX</Typography>
          </View>
          <TitleAndParagraph title={t("signup")} paragraph={t("otpSentToEmail")} rowGap={4} />
          <EmailInput name="email" control={control} />
        </ContentWrapper>
      </ScrollContainer>
      <Footer>
        <LongButton version="primary" title={t("next")} onPress={handleSubmit(SubmitHandle)} />
        <LongButton
          version="secondary"
          title={t("skip")}
          onPress={() => navigation.navigate("SignupSuccess")}
        />
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
