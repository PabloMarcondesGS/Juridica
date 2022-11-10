import React from "react";
import * as S from "./Performance.styles";

type IPerformance = {
  title: string;
  value: number;
};

const Performance: React.FC<IPerformance> = ({ title, value }) => {
  return (
    <S.Container>
      <S.PerformanceInfos>
        <S.Infos>{title}</S.Infos>
        <S.GraphCircleMini colorMini={value}>
          <S.ValueMini>
            {value}
            <S.PercentageMini>{"\n"}%</S.PercentageMini>
          </S.ValueMini>
        </S.GraphCircleMini>
      </S.PerformanceInfos>
    </S.Container>
  );
};

export default Performance;
