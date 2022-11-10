import { TouchableOpacityProps } from "react-native";

export interface IQuestions extends TouchableOpacityProps {
  text: string;
  content: { id: number; text: string; type: boolean }[];
}
