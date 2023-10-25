import { StyleSheet, View } from "react-native";
import React from "react";
import { Typography } from "../../../components/Typography";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { AppTheme, useAppTheme } from "../../../theme/theme";
import { useTranslation } from "react-i18next";
import { LongButton } from "../../../components/LongButton";
import { AuthNavigatorParams } from "../../../navigation/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaContainer } from "../../../components/SafeAreaContainer";
import { ScrollContainer } from "../../../components/ScrollContainer";
import { Footer } from "../../../components/Footer";
import { NoAccountCreate } from "../Shared/NoAccountCreate";

type Props = NativeStackScreenProps<AuthNavigatorParams>;
export const LoginOptionsPage = (props: Props) => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  return (
    <SafeAreaContainer>
      <ScrollContainer>
        <View style={styles.logo}>
          <Typography version="heading6">TrainX</Typography>
        </View>
        <View style={styles.pic}></View>
        <Typography version="heading6">{t("login")}</Typography>
        <LongButton
          version="primary"
          title={t("mobileLogin")}
          icon={<AntDesign name="mobile1" size={24} color={theme.colors.black5} />}
          onPress={() => {
            props.navigation.navigate("MobileLoginPage");
          }}
        />
        <LongButton
          version="secondary"
          title={t("emailLogin")}
          icon={<Ionicons name="mail-outline" size={24} color={theme.colors.primary} />}
          onPress={() => {
            props.navigation.navigate("EmailLoginPage");
          }}
        />
      </ScrollContainer>
      <Footer>
        <NoAccountCreate nativeScreenProps={props} />
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
    //TODO: remove this when creating the svg
    pic: {
      height: 300,
      backgroundColor: theme.colors.primary,
      borderRadius: 16,
      margin: 16,
    },
  });
