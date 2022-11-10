import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./ButtonTrouble.styles";

interface IPropsButton extends TouchableOpacityProps {
  colorButton: string;
  title: string;
  selected: string;
}

const ButtonTrouble: React.FC<IPropsButton> = ({
  selected,
  title,
  colorButton,
  ...props
}) => {
  return (
    <S.Container>
      {selected === "selected" ? (
        <S.Button {...props}>
          <S.ContainerButton color={colorButton} font={colorButton}>
            <S.Text font="#131418">{title}</S.Text>
          </S.ContainerButton>
          <S.Line color={colorButton} />
        </S.Button>
      ) : selected === "block" ? (
        <S.ButtonDisabled {...props} disabled={true}>
          <S.ContainerButton color="#131418" font="#ffffff">
            <S.Text font="#ffffff">{title}</S.Text>
          </S.ContainerButton>
          <S.Line color={colorButton} />
        </S.ButtonDisabled>
      ) : (
        <S.Button {...props}>
          <S.ContainerButton color="#131418" font="#ffffff">
            <S.Text font="#ffffff">{title}</S.Text>
          </S.ContainerButton>
          <S.Line color={colorButton} />
        </S.Button>
      )}
    </S.Container>
  );
};
export default ButtonTrouble;
