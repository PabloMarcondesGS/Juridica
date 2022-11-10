import { TextInputProps } from "react-native";

export interface IInput extends TextInputProps {
  label: string;
  type?: "search" | "big" | "medium" | "complete" | "completeSecondary";
}
