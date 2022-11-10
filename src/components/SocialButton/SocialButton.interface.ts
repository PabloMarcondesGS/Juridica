import { TouchableOpacityProps } from "react-native";

export interface IButton extends TouchableOpacityProps {
  type: "facebook" | "google";
}
