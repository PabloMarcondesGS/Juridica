export interface IHeader {
  title: string;
  type?: "simple";
  action?: () => void;
}
