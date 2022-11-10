import React from "react";
import * as S from "./Content.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type IContent = {
  text: string;
  type: Boolean;
};

const Content: React.FC<IContent> = ({ text, type }) => {
  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>{text}</S.Title>

        {type && (
          <MaterialCommunityIcons name="check" size={20} color="#09CBDA" />
        )}
      </S.SectionTitle>
      <S.Line />
    </S.Container>
  );
};

export default Content;
