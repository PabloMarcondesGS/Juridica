import React from "react";
import * as S from "./Content.styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

type IContent = {
  text: string;
  type: Boolean;
};

const Content: React.FC<IContent> = ({ text, type }) => {
  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>{text}</S.Title>
        <S.SectionIcon>
          {type ? (
            <MaterialCommunityIcons name="check" size={20} color="#5EFF5A" />
          ) : (
            <AntDesign name="close" size={18} color="#FF2D2E" />
          )}
        </S.SectionIcon>
      </S.SectionTitle>
      <S.Line />
    </S.Container>
  );
};

export default Content;
