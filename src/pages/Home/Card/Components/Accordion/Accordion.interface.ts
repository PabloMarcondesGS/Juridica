import { TouchableOpacityProps } from "react-native";

export interface IAccordion extends TouchableOpacityProps {
  text: string;
  type: false | true | "item" | "end";
}
