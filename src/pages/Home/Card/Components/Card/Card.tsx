import React from "react";
import { ICard } from "./Card.interface";
import * as S from "./Card.styles";
import Left from "../../../../../../assets/iconLeft.png";
import Right from "../../../../../../assets/iconRight.png";

const Card: React.FC<ICard> = ({ color, text, value, type, ...props }) => {
  return (
    <S.Container {...props} color={color}>
      <S.BorderOne color={color}>
        <S.BorderTwo color={color}>
          {type === "repeat" ? (
            <S.BorderThree color={color}>
              <S.Title>{text}</S.Title>
              <S.Circle>
                <S.Value>{value}</S.Value>
              </S.Circle>
              <S.Repeat>
                <S.Icon source={Left} />
                <S.Icon source={Right} />
                <S.RepeatText>REPETIÇÃO{"\n"} ESPAÇADA</S.RepeatText>
              </S.Repeat>
            </S.BorderThree>
          ) : (
            <S.BorderThree color={color}>
              <S.Title>novos{"\n"}cards</S.Title>
              <S.Circle>
                <S.Value>{value}</S.Value>
              </S.Circle>
              <S.Empty />
            </S.BorderThree>
          )}
        </S.BorderTwo>
      </S.BorderOne>
    </S.Container>
  );
};

export default Card;
