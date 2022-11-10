import React from "react";
import * as S from "./PerformanceBig.styles";
import { AntDesign } from "@expo/vector-icons";

const PerformanceBig: React.FC = () => {
  return (
    <S.Container>
      <S.SectionPerformance>
        <S.SectionTitlePerformance>
          <S.Title>Desempenho</S.Title>
        </S.SectionTitlePerformance>
        <S.BackgroundGraphPerfomance>
          <S.Graph
            source={require("../../../../../../../../assets/BackgroundLines.png")}
          >
            <S.SectionValueGraphBig>
              <S.ValueGraph>2</S.ValueGraph>
              <S.GraphStepBig value={6} color="#FF2D2E" />
              <S.Line color="#FF2D2E" />
              <S.StatusGraph color="#FF2D2E">erros</S.StatusGraph>
            </S.SectionValueGraphBig>

            <S.SectionValueGraphBig>
              <S.ValueGraph>13</S.ValueGraph>
              <S.GraphStepBig value={53} color="#5EFF5A" />
              <S.Line color="#5EFF5A" />
              <S.StatusGraph color="#5EFF5A">acertos</S.StatusGraph>
            </S.SectionValueGraphBig>
          </S.Graph>
        </S.BackgroundGraphPerfomance>
        <S.SectionStatus>
          <S.ResultsInfos>Acertos</S.ResultsInfos>
          <S.ResultsInfos>13</S.ResultsInfos>
        </S.SectionStatus>
        <S.SectionStatus>
          <S.ResultsInfos>Erros</S.ResultsInfos>
          <S.ResultsInfos>2</S.ResultsInfos>
        </S.SectionStatus>

        <S.SectionStatus>
          <S.ResultsInfosPrimary>Respondidos</S.ResultsInfosPrimary>
          <S.ResultsInfosPrimary>15</S.ResultsInfosPrimary>
        </S.SectionStatus>
        <S.SectionResults>
          <S.ResultsInfos>Média de Estudo Diário</S.ResultsInfos>
          <S.Group>
            <AntDesign
              name="caretup"
              size={12}
              color="#5EFF5A"
              style={{
                marginRight: 10,
              }}
            />
            <S.ResultsInfos>47 min</S.ResultsInfos>
          </S.Group>
        </S.SectionResults>
      </S.SectionPerformance>
    </S.Container>
  );
};

export default PerformanceBig;
