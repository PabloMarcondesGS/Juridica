import { TouchableOpacityProps } from "react-native";

export interface IButton extends TouchableOpacityProps {
  text: string;
  type:
    | "solid"
    | "outline"
    | "dark"
    | "solidWhite"
    | "eye"
    | "deepening"
    | "revision"
    | "darkMini"
    | "outlineMini"
    | "red"
    | "solidMini";
}
