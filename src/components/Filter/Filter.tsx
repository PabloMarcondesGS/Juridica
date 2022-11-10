import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import * as S from "./Filter.styles";

type IFilter = {
  title: string;
  filter?: string;
  action?: () => void;
};

const Filter: React.FC<IFilter> = ({ filter, title, action }) => {
  return (
    <S.Container onPress={action}>
      <S.SectionTitle>
        <S.Title>{title}</S.Title>
        {filter ? (
          <S.SubTitlePrimary>{filter}</S.SubTitlePrimary>
        ) : (
          <S.PlaceHolder>Selecionar...</S.PlaceHolder>
        )}
      </S.SectionTitle>
      <MaterialIcons name="keyboard-arrow-right" size={28} color="#767676" />
    </S.Container>
  );
};

export default Filter;
