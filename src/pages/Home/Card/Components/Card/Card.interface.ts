import { TouchableOpacityProps } from "react-native";

export interface ICard extends TouchableOpacityProps {
  text?: string;
  value: number;
  color: string;
  type?: "repeat" | "new";
}
