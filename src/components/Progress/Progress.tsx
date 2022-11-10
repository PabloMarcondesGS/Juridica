import React from "react";
import * as S from "./Progress.styles";

const Progress: React.FC = () => {
  return (
    <S.Container>
      <S.Step>
        <S.Progress>2</S.Progress>
      </S.Step>
      <S.Line />
      <S.Step>
        <S.Progress>3</S.Progress>
      </S.Step>
      <S.LineOcult />
      <S.ProgressOcult>4</S.ProgressOcult>
    </S.Container>
  );
};

export default Progress;
