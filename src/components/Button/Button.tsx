import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { IButton } from "./Button.interface";
import * as S from "./Button.styles";

const Button: React.FC<IButton> = ({ type, text, ...props }) => {
  return (
    <S.Button>
      {type == "solid" ? (
        <S.Container {...props}>
          <S.Title>{text}</S.Title>
        </S.Container>
      ) : type == "dark" ? (
        <S.ContainerDark {...props}>
          <S.TitleDark>{text}</S.TitleDark>
        </S.ContainerDark>
      ) : type == "darkMini" ? (
        <S.ContainerDarkMini {...props}>
          <S.TitleDark>{text}</S.TitleDark>
        </S.ContainerDarkMini>
      ) : type == "solidWhite" ? (
        <S.Container {...props}>
          <S.TitleWhite>{text}</S.TitleWhite>
        </S.Container>
      ) : type == "eye" ? (
        <S.ContainerOutline {...props}>
          <AntDesign name="eyeo" size={24} color="white" />
          <S.TitleOutlineEye>{text}</S.TitleOutlineEye>
        </S.ContainerOutline>
      ) : type == "deepening" ? (
        <S.ContainerDeepening {...props}>
          <S.TitleDeepening>{text}</S.TitleDeepening>
        </S.ContainerDeepening>
      ) : type == "revision" ? (
        <S.ContainerRevision {...props}>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="black"
          />
          <S.TitleRevision>{text}</S.TitleRevision>
        </S.ContainerRevision>
      ) : type == "outlineMini" ? (
        <S.ContainerOutlineMini {...props}>
          <S.TitleOutline>{text}</S.TitleOutline>
        </S.ContainerOutlineMini>
      ) : type == "red" ? (
        <S.ContainerRed {...props}>
          <S.TitleRed>{text}</S.TitleRed>
        </S.ContainerRed>
      ) : type == "solidMini" ? (
        <S.ContainerMini {...props}>
          <S.Title>{text}</S.Title>
        </S.ContainerMini>
      ) : (
        <S.ContainerOutline {...props}>
          <S.TitleOutline>{text}</S.TitleOutline>
        </S.ContainerOutline>
      )}
    </S.Button>
  );
};

export default Button;
