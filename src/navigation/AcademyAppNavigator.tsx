import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {ActivitiesPage} from '../pages/ActivitiesPageTrial/ActivitiesPage';
import {BottomTabPages} from './BottomTabPages';

//this is the stack component that will have the bottom nav and all the other pages in the academy App
const Stack = createNativeStackNavigator<AcademyNavigatorParams>();
export type AcademyNavigatorParams = {
  BottomTabPages: undefined;
  ActivitiesPage: undefined;
};
const academyNavigatorOptions: NativeStackNavigationOptions = {
  //headerShown: false,
  headerTitleAlign: 'center',
};
export const AcademyAppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={academyNavigatorOptions}>
      <Stack.Screen name="BottomTabPages" component={BottomTabPages} />
      <Stack.Screen name="ActivitiesPage" component={ActivitiesPage} />
    </Stack.Navigator>
  );
};
