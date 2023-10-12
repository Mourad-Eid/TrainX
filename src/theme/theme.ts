import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme, useTheme } from "react-native-paper";

const fonts = {
  heading1: {
    fontSize: 68,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading2: {
    fontSize: 51,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading3: {
    fontSize: 38,
    fontWeight: "300",
    fontFamily: "Rubik",
  },
  heading4: {
    fontSize: 29,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading5: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  heading6: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Rubik SemiBold",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Rubik",
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "Rubik",
  },
  labelBig: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Rubik",
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Rubik",
  },
};

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6A9FDC",
    secondary: "#DCA06A",
    gradient: "linear-gradient(0deg, #6A9FDC 15.8%, #DCA06A 100%)",
    primaryDark: "#4A809A",
    primaryLight: "#DEF4FF",
    secondaryDark: "#9A704A",
    error: "#ED4337",
    success: "#3ACD40",
    warning: "#F3CD43",
    black: "#24272B",
    black75: "#55585B",
    black50: "#95979A",
    black25: "#CACBCD",
    black10: "#EBEDEF",
    black5: "#F7F9FA",
  },
  fonts: fonts,
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#6A9FDC",
    secondary: "#DCA06A",
    gradient: "linear-gradient(0deg, #6A9FDC 15.8%, #DCA06A 100%)",
    primaryDark: "#4A809A",
    primaryLight: "#DEF4FF",
    secondaryDark: "#9A704A",
    error: "#ED4337",
    success: "#3ACD40",
    warning: "#F3CD43",
    black: "#24272B",
    black75: "#55585B",
    black50: "#95979A",
    black25: "#CACBCD",
    black10: "#EBEDEF",
    black5: "#F7F9FA",
  },
  fonts: fonts,
};

const isDarkMode = useColorScheme() === "dark";

const theme = isDarkMode ? darkTheme : lightTheme;

export type AppTheme = typeof theme;
export const useAppTheme = () => useTheme<AppTheme>(theme);
