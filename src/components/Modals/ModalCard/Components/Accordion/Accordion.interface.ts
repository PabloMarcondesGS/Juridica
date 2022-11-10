import { TouchableOpacityProps } from "react-native";

export interface IAccordion extends TouchableOpacityProps {
  text: string;
  step: string;
  value: string;
}
