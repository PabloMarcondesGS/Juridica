import { AntDesign } from "@expo/vector-icons";
import React from "react";
import * as S from "./Question.styles";

type IQuestion = {
  text: string;
  discipline: string;
  resolved?: boolean;
};

const Question: React.FC<IQuestion> = ({ text, discipline, resolved }) => {
  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>{text}</S.Title>
        <S.Discipline>{discipline}</S.Discipline>
      </S.SectionTitle>
      {resolved && (
        <AntDesign
          name="check"
          size={20}
          color="#09CBDA"
          style={{ paddingRight: 6 }}
        />
      )}
    </S.Container>
  );
};

export default Question;
