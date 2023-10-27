import { useAppTheme } from "../../theme/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Pressable } from "react-native";

type EyeIconProps = React.ComponentProps<typeof Pressable> & {
  togglePasswordShown: () => void;
  passwordShown: boolean;
};
export const EyeIcon = (props: EyeIconProps) => {
  const theme = useAppTheme();
  return (
    <Pressable onPress={props.togglePasswordShown}>
      <Ionicons
        name={props.passwordShown ? "eye-outline" : "eye-off-outline"}
        size={24}
        color={theme.colors.black50}
      />
    </Pressable>
  );
};
