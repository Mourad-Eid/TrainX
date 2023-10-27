import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { LoginOptionsPage } from "../pages/Login/LoginOptionsPage/LoginOptionsPage";
import { EmailLoginPage } from "../pages/Login/EmailLoginPage/EmailLoginPage";
import { MobileLoginPage } from "../pages/Login/MobileLoginPage/MobileLoginPage";
import { SignupFields } from "../pages/Signup/SignupFields/SignupFields";
import { SignupEmail } from "../pages/Signup/SignupEmail/SignupEmail";
import { PhoneOTP } from "../pages/Signup/PhoneOTP/PhoneOTP";
import { EmailOTP } from "../pages/Signup/EmailOTP/EmailOTP";
import { SignupAcademyName } from "../pages/Signup/SignupAcademyName/SignupAcademyName";
import { SignupActivities } from "../pages/Signup/SignupActivities/SignupActivities";
import { SignupDocsUpload } from "../pages/Signup/SignupDocsUpload/SignupDocsUpload";
import { SignupSuccess } from "../pages/Signup/SignupSuccess/SignupSuccess";

const Stack = createNativeStackNavigator<AuthNavigatorParams>();
export type AuthNavigatorParams = {
  LoginOptionsPage: undefined;
  EmailLoginPage: undefined;
  MobileLoginPage: undefined;
  SignupFields: undefined;
  SignupEmail: undefined;
  PhoneOTP: undefined;
  EmailOTP: undefined;
  SignupAcademyName: undefined;
  SignupActivities: undefined;
  SignupDocsUpload: undefined;
  SignupSuccess: undefined;
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
      <Stack.Screen name="SignupFields" component={SignupFields} />
      <Stack.Screen name="SignupEmail" component={SignupEmail} />
      <Stack.Screen name="PhoneOTP" component={PhoneOTP} />
      <Stack.Screen name="EmailOTP" component={EmailOTP} />
      <Stack.Screen name="SignupAcademyName" component={SignupAcademyName} />
      <Stack.Screen name="SignupActivities" component={SignupActivities} />
      <Stack.Screen name="SignupDocsUpload" component={SignupDocsUpload} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
    </Stack.Navigator>
  );
};
