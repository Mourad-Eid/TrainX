import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomePage} from '../pages/HomePage/HomePage';
import {StudentsPage} from '../pages/StudentsPage/StudentsPage';
import {AcademyManagementPage} from '../pages/AcademyManagementPage/AcademyManagementPage';

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
export const BottomTabPages = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, headerTitleAlign: 'center'}}>
      <Tab.Screen
        name="HomeTab"
        component={HomePage}
        options={{tabBarIcon: homeIcon, tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="StudentsTab"
        component={StudentsPage}
        options={{tabBarIcon: studentsIcon, tabBarLabel: 'Students'}}
      />
      <Tab.Screen
        name="AcademyManagementTab"
        component={AcademyManagementPage}
        options={{tabBarIcon: academyManagementIcon, tabBarLabel: 'Academy'}}
      />
    </Tab.Navigator>
  );
};
