import { StyleSheet, View } from "react-native";
import React from "react";
import { Typography } from "../../../components/Typography";
import { AppTheme, useAppTheme } from "../../../theme/theme";
import { useTranslation } from "react-i18next";
import { LongButton } from "../../../components/LongButton";
import { ScrollContainer } from "../../../components/ScrollContainer";
import { Controller, useForm } from "react-hook-form";
import { PasswordInput } from "../../../components/InputTexts/PasswordInput";
import { SafeAreaContainer } from "../../../components/SafeAreaContainer";
import { PhoneInput } from "../../../components/InputTexts/PhoneInput";
import { Footer } from "../../../components/Footer";
import { AuthNavigatorParams } from "../../../navigation/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { TitleAndParagraph } from "../../../components/TitleAndParagraph";
import { NameInput } from "../../../components/InputTexts/NameInput";
import { PasswordConfirmInput } from "../../../components/InputTexts/PasswordConfirmInput";
import { RadioGroupInput } from "../../../components/RadioGroupInput";
import { RadioButton } from "react-native-paper";

type Props = NativeStackScreenProps<AuthNavigatorParams>;
export const SignupFields = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
  });

  const SubmitHandle = (data: {
    name: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    gender: string;
  }) => {
    console.log("enterted credentials: ", data);
    navigation.navigate("PhoneOTP");
  };
  return (
    <SafeAreaContainer>
      <ScrollContainer>
        <ContentWrapper rowGap={8}>
          <View style={styles.logo}>
            <Typography version="heading6">TrainX</Typography>
          </View>
          <TitleAndParagraph title={t("signup")} paragraph={t("enterYourInfo")} rowGap={4} />
          <NameInput name="name" control={control} />
          <PhoneInput name="phoneNumber" control={control} />
          <PasswordInput name="password" control={control} />
          <PasswordConfirmInput
            name="confirmPassword"
            confirmName="password"
            control={control}
            getValues={getValues}
          />
          <Controller
            control={control}
            name="gender"
            rules={{
              required: t("genderIsRequired"),
              validate: (value) => {
                if (value === "male" || value === "female") {
                  return true;
                }
                return t("maleFemaleOnly");
              },
            }}
            defaultValue="male"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <RadioGroupInput
                  title={t("gender")}
                  error={error}
                  onValueChange={onChange}
                  value={value}
                  children={
                    <>
                      <RadioButton.Item label={t("male")} value="male" />
                      <RadioButton.Item label={t("female")} value="female" />
                    </>
                  }
                />
              </>
            )}
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
