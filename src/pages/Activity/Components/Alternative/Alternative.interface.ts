import { TouchableOpacityProps } from "react-native";

export interface IAlternative extends TouchableOpacityProps {
  value: string;
  type?: string;
}
