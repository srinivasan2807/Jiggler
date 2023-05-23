import { EvilIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "./Themed";
import { IconButtonProps } from "../types/type";

const IconButton = ({ iconName, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* ICON */}
      <EvilIcons name={iconName} size={22} color={"gray"} />
      {/* number */}
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </View>
  );
};

export default IconButton;
