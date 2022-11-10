import React from "react";
import * as S from "./CardComent.styles";

interface ICardProps {
  title: string;
  text: string;
}

const CardComent: React.FC<ICardProps> = ({ title, text }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default CardComent;
