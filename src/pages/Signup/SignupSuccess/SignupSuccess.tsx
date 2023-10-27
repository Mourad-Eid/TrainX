import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaContainer } from "../../../components/SafeAreaContainer";
import { Footer } from "../../../components/Footer";
import { LongButton } from "../../../components/LongButton";
import { useTranslation } from "react-i18next";
import { TitleAndParagraph } from "../../../components/TitleAndParagraph";
import { AuthNavigatorParams } from "../../../navigation/AuthNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<AuthNavigatorParams>;
export const SignupSuccess = ({ navigation }: Props) => {
  const { t } = useTranslation();
  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <View style={styles.pic}></View>
        <TitleAndParagraph title={t("accountCreationSuccess")} paragraph={t("youCanCreateAcademy")} />
      </View>
      <Footer rowGap={4}>
        <LongButton version="primary" title={t("getStarted")} />
        <LongButton
          version="secondary"
          title={t("createAcademy")}
          onPress={() => navigation.navigate("SignupAcademyName")}
        />
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
