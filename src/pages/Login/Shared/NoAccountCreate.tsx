import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Typography } from "../../../components/Typography";
import ClickableText from "../../../components/ClickableText";
import { useTranslation } from "react-i18next";
import { AppTheme, useAppTheme } from "../../../theme/theme";

export const NoAccountCreate = () => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.haveNoAccount}>
      <Typography version="label">{t("haveNoAccount?")} </Typography>
      <ClickableText version="boldLabel" text={t("createAccount")} color={theme.colors.primary} />
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
