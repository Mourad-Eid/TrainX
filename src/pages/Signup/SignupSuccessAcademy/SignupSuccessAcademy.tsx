import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaContainer } from "../../../components/SafeAreaContainer";
import { Footer } from "../../../components/Footer";
import { LongButton } from "../../../components/LongButton";
import { useTranslation } from "react-i18next";
import { TitleAndParagraph } from "../../../components/TitleAndParagraph";

export const SignupSuccessAcademy = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <View style={styles.pic}></View>
        <TitleAndParagraph title={t("academyCreationSuccess")} paragraph={t("youWillBeContacted")} />
      </View>
      <Footer>
        <LongButton version="primary" title={t("getStarted")} />
      </Footer>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  //TODO: replace this with the svg
  pic: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: 16,
  },
});
