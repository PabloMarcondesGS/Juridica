import React from "react";
import * as S from "./Progress.style";

interface Props {
  value: number;
  total: number;
}

const Progress: React.FC<Props> = (props: Props) => {
  return (
    <S.Container>
      <S.Progress value={`${props.value}%`}>
        <S.Value>{props.value}</S.Value>
      </S.Progress>
      <S.Total>{props.total}</S.Total>
    </S.Container>
  );
};

export default Progress;
