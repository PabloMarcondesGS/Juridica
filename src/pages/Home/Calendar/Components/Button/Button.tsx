import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import * as S from "./Button.styles";

interface Props {
  day: string;
  month: string;
  text: string;
  number: string;
}

const Button: React.FC<Props> = (props: Props) => {
  const [color, setColor] = useState(false);

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.SectionDate>
          <S.Value>{props.day}</S.Value>
          <S.Date>{props.month}</S.Date>
        </S.SectionDate>
        <S.SectionText>
          <S.TextBig>
            {props.number} <S.Text>- {props.text}</S.Text>
          </S.TextBig>
          <S.SubText>FGV</S.SubText>
        </S.SectionText>
      </S.ContainerLeft>
      <Octicons
        onPress={() => setColor(!color)}
        name="download"
        size={24}
        color={color === true ? "#09CBDA" : "white"}
      />
    </S.Container>
  );
};

export default Button;
