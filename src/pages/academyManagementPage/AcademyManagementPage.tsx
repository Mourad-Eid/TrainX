import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AcademyNavigatorParams } from '../../navigation/AcademyAppNavigator';

type Props = NativeStackScreenProps<AcademyNavigatorParams>;
const AcademyManagementPage = ({navigation}: Props) => {
  return (
    <View>
      <Text>AcademyManagementPage</Text>
      <Button onPress={()=> navigation.navigate("ActivitiesPage")} title='Activities' />
    </View>
  )
}

export default AcademyManagementPage