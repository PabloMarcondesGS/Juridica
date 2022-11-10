import { TouchableOpacityProps } from "react-native";

export interface IBook extends TouchableOpacityProps {
  type?: "create" | "new" | "error" | "normal";
  newValue?: number;
  text: string;
}
