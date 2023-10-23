import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Typography } from "../../../components/Typography";
import ClickableText from "../../../components/ClickableText";
import { useTranslation } from "react-i18next";
import { AppTheme, useAppTheme } from "../../../theme/theme";
import { AuthNavigatorParams } from "../../../navigation/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = {
  nativeScreenProps: NativeStackScreenProps<AuthNavigatorParams>;
};

export const NoAccountCreate = (props: Props) => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.haveNoAccount}>
      <Typography version="label">{t("haveNoAccount?")} </Typography>
      <ClickableText
        version="boldLabel"
        text={t("createAccount")}
        color={theme.colors.primary}
        onPress={() => {
          props.nativeScreenProps.navigation.navigate("SignupOptionsPage");
        }}
      />
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    haveNoAccount: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
      margin: 8,
    },
  });
