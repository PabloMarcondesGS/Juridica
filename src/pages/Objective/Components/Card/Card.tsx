import React from "react";
import * as S from "./Card.styles";
import { Entypo } from "@expo/vector-icons";

interface Props {
  title: string;
  value: number;
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <S.Container>
      <S.SectionLeft>
        <Entypo name="menu" size={20} color="#767676" />
        <S.Title>{props.title}</S.Title>
      </S.SectionLeft>
      <S.SectionRight>
        <S.Value>{props.value}</S.Value>
      </S.SectionRight>
    </S.Container>
  );
};

export default Card;
