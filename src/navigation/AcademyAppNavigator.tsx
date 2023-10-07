import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/HomePage/HomePage';
import {StudentsPage} from '../pages/StudentsPage/StudentsPage';
import {AcademyManagementPage} from '../pages/AcademyManagementPage/AcademyManagementPage';
import {ActivitiesPage} from '../pages/ActivitiesPage/ActivitiesPage';

//note: in order to hide the navbar in some pages the method found here https://reactnavigation.org/docs/hiding-tabbar-in-screens is need, the following component is the tab navigator that has all the main pages.
const Tab = createBottomTabNavigator<TabNavigationPrams>();
export type TabNavigationPrams = {
  HomeTab: undefined;
  StudentsTab: undefined;
  AcademyManagementTab: undefined;
};
type tabBarIconProps = {focused?: boolean; color?: string; size?: number};

const homeIcon = ({color, size}: tabBarIconProps) => (
  <Ionicons name="home" color={color} size={size} />
);
const studentsIcon = ({color, size}: tabBarIconProps) => (
  <Ionicons name="people" color={color} size={size} />
);
const academyManagementIcon = ({color, size}: tabBarIconProps) => (
  <Ionicons name="business" color={color} size={size} />
);

const BottomTabPages = () => {
  const tabNavigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    headerTitleAlign: 'center',
  };
  const homeScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: homeIcon,
    tabBarLabel: 'Home',
  };
  const studentsScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: studentsIcon,
    tabBarLabel: 'Students',
  };
  const AcademyManagementScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: academyManagementIcon,
    tabBarLabel: 'Academy',
  };
  return (
    <Tab.Navigator screenOptions={tabNavigatorOptions}>
      <Tab.Screen
        name="HomeTab"
        component={HomePage}
        options={homeScreenOptions}
      />
      <Tab.Screen
        name="StudentsTab"
        component={StudentsPage}
        options={studentsScreenOptions}
      />
      <Tab.Screen
        name="AcademyManagementTab"
        component={AcademyManagementPage}
        options={AcademyManagementScreenOptions}
      />
    </Tab.Navigator>
  );
};

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

