import { View, Text } from 'react-native'
import React from 'react'
import AcademyAppNavigator from './AcademyAppNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const isAuthenticated = true;
  return (
    <AcademyAppNavigator/>
  )
}

export default AppNavigator