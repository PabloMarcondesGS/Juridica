import { ModalProps } from "react-native";

export interface IModal extends ModalProps {
  open: boolean;
  action?: () => void;
  close: () => void;
  title?: string;
  text?: string;
  sucess?: boolean;
  type?: "select" | "noSearch" | "noSearchBlock" | "noButton" | "moreOptions";
  buttons?: string[];
  titleSucess?: string;
  textSucess?: string;
  subTextSucess?: string;
  action1?: () => void;
  action2?: () => void;
  action3?: () => void;
  action4?: () => void;
  action5?: () => void;
  color?: string;
  content?: { title: string; id: string }[];
}
