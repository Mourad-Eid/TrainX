import { View, Text, Button } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AcademyNavigatorParams } from '../../navigation/AcademyAppNavigator';

type Props = NativeStackScreenProps<AcademyNavigatorParams>;
export const AcademyManagementPage = ({navigation}: Props) => {
  return (
    <View>
      <Text>AcademyManagementPage</Text>
      <Button onPress={()=> navigation.navigate("ActivitiesPage")} title='Activities' />
    </View>
  )
}

