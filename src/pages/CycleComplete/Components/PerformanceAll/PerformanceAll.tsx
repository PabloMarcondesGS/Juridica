import React from "react";
import * as S from "./PerformanceAll.styles";
import Brand from "../../../../../assets/brandGold.png";

const PerformanceAll: React.FC = () => {
  return (
    <S.Container>
      <S.SectionPerformance>
        <S.SectionTitlePerformance>
          <S.Title>Desempenho do Ciclo</S.Title>
        </S.SectionTitlePerformance>
        <S.BackgroundGraphPerfomance>
          <S.Graph
            source={require("../../../../../assets/BackgroundLines.png")}
          >
            <S.SectionValueGraph>
              <S.ValueGraph>7</S.ValueGraph>
              <S.GraphStep value={7} color="#FF2D2E" />
              <S.Line color="#FF2D2E" />
              <S.StatusGraph color="#FF2D2E">errei</S.StatusGraph>
            </S.SectionValueGraph>
            <S.SectionValueGraph>
              <S.ValueGraph>28</S.ValueGraph>
              <S.GraphStep value={28} color="#E8680C" />
              <S.Line color="#E8680C" />
              <S.StatusGraph color="#E8680C">difícil</S.StatusGraph>
            </S.SectionValueGraph>
            <S.SectionValueGraph>
              <S.ValueGraph>19</S.ValueGraph>
              <S.GraphStep value={19} color="#FFC77D" />
              <S.Line color="#FFC77D" />
              <S.StatusGraph color="#FFC77D">reg.</S.StatusGraph>
            </S.SectionValueGraph>
            <S.SectionValueGraph>
              <S.ValueGraph>43</S.ValueGraph>
              <S.GraphStep value={43} color="#5EFF5A" />
              <S.Line color="#5EFF5A" />
              <S.StatusGraph color="#5EFF5A">fácil</S.StatusGraph>
            </S.SectionValueGraph>
          </S.Graph>
          <S.SectionStatus>
            <S.ResultsInfos>Errei</S.ResultsInfos>
            <S.ResultsInfos>7</S.ResultsInfos>
          </S.SectionStatus>
          <S.SectionStatus>
            <S.ResultsInfos>Difícil</S.ResultsInfos>
            <S.ResultsInfos>28</S.ResultsInfos>
          </S.SectionStatus>
          <S.SectionStatus>
            <S.ResultsInfos>Regular</S.ResultsInfos>
            <S.ResultsInfos>19</S.ResultsInfos>
          </S.SectionStatus>
          <S.SectionStatus>
            <S.ResultsInfos>Fácil</S.ResultsInfos>
            <S.ResultsInfos>43</S.ResultsInfos>
          </S.SectionStatus>
          <S.SectionStatus>
            <S.SectionInfo>
              <S.Brand source={Brand} />
              <S.Info>
                Você errou 3 cards a menos do que no{"\n"} ciclo anterior.
                Parabéns!
              </S.Info>
            </S.SectionInfo>
          </S.SectionStatus>
        </S.BackgroundGraphPerfomance>
      </S.SectionPerformance>
    </S.Container>
  );
};

export default PerformanceAll;
