import { TouchableOpacityProps } from "react-native";

export interface IAccordion extends TouchableOpacityProps {
  text: string;
  content: { id: number; text: string; type: boolean }[];
}
