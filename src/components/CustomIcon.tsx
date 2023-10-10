import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

type IconProps = {
  iconSet: "MaterialCommunityIcons" | "Entypo" | "AntDesign" | "Ionicons";
  name: string;
  size?: number;
  color?: string;
};

export const CustomIcon = (props: IconProps) => {
  const { name, size, iconSet, color } = props;
  switch (iconSet) {
    case "AntDesign":
      return <AntDesign name={name} size={size} color={color} />;
    case "Entypo":
      return <Entypo name={name} size={size} color={color} />;
    case "MaterialCommunityIcons":
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    case "Ionicons":
      return <Ionicons name={name} size={size} color={color} />;
  }
};
