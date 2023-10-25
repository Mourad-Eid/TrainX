import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { LoginOptionsPage } from "../pages/Login/LoginOptionsPage/LoginOptionsPage";
import { EmailLoginPage } from "../pages/Login/EmailLoginPage/EmailLoginPage";
import { MobileLoginPage } from "../pages/Login/MobileLoginPage/MobileLoginPage";
import { SignupOptionsPage } from "../pages/Signup/SignupOptionsPage/SignupOptionsPage";

const Stack = createNativeStackNavigator<AuthNavigatorParams>();
export type AuthNavigatorParams = {
  LoginOptionsPage: undefined;
  EmailLoginPage: undefined;
  MobileLoginPage: undefined;
  SignupOptionsPage: undefined;
};
const academyNavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={academyNavigatorOptions}>
      <Stack.Screen name="LoginOptionsPage" component={LoginOptionsPage} />
      <Stack.Screen name="EmailLoginPage" component={EmailLoginPage} />
      <Stack.Screen name="MobileLoginPage" component={MobileLoginPage} />
      <Stack.Screen name="SignupOptionsPage" component={SignupOptionsPage} />
    </Stack.Navigator>
  );
};
