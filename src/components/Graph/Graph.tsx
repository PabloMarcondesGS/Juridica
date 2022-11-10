import React from "react";
import { VictoryPie } from "victory-native";
import * as S from "./Graph.styles";

interface IGraph {
  title: string;
  cycle: number;
  totalCycle: number;
  minutes: number;
  totalMinutes: number;
  progressCycle: number;
  progressMinutes: number;
}

const Graph: React.FC<IGraph> = ({
  minutes,
  title,
  totalCycle,
  totalMinutes,
  progressCycle,
  progressMinutes,
  cycle,
}) => {
  return (
    <S.Container>
      <S.GraphCycleExternal>
        <VictoryPie
          data={[
            { x: "Cats", y: minutes },
            {
              x: "Dogs",
              y: progressMinutes,
            },
            { x: "Birds", y: totalMinutes - minutes - progressMinutes },
          ]}
          width={250}
          height={250}
          innerRadius={55}
          colorScale={["#FF9100", "#5EFF5A", "#1F1F23"]}
          labels={["", "", ""]}
          cornerRadius={({ datum }) => datum.y * 5}
          padAngle={0.001}
        />
      </S.GraphCycleExternal>
      <S.GraphCycleExternalBackground>
        <VictoryPie
          data={[
            { x: "Cats", y: 10 },
            { x: "Cats", y: totalMinutes * 3 },
            { x: "Dogs", y: totalMinutes },
          ]}
          width={250}
          height={250}
          innerRadius={55}
          colorScale={["#1F1F23", "#FF9100", "#1F1F23"]}
          labels={["", "", ""]}
          padAngle={0.001}
        />
      </S.GraphCycleExternalBackground>
      <S.GraphCycleInternal>
        <VictoryPie
          data={[
            { x: "Cats", y: cycle },
            { x: "Dogs", y: progressCycle },
            { x: "Birds", y: totalCycle - cycle - progressCycle },
          ]}
          labels={["", "", ""]}
          innerRadius={30}
          cornerRadius={({ datum }) => datum.y * 5}
          width={190}
          height={190}
          colorScale={["#FFB552", "#5EFF5A", "#1F1F23"]}
        />
      </S.GraphCycleInternal>
      <S.GraphCycleInternalBackground>
        <VictoryPie
          data={[
            { x: "Cats", y: 10 },
            { x: "Dogs", y: totalCycle },
            { x: "Birds", y: totalCycle },
          ]}
          labels={["", "", ""]}
          innerRadius={30}
          width={190}
          height={190}
          colorScale={["#1F1F23", "#FFB552", "#1F1F23"]}
        />
      </S.GraphCycleInternalBackground>
      <S.ContainerInfos>
        <S.Title>{title}</S.Title>
        <S.Complete>Ciclo Concluído</S.Complete>
        <S.BackgroundInfos>
          <S.Approval>Chances da aprovação:</S.Approval>
          <S.SectionInfo>
            <S.Ball color="#FF9100" />
            <S.Info>
              Minutos: {minutes}
              <S.Total>/{totalMinutes}</S.Total>
            </S.Info>
          </S.SectionInfo>
          <S.SectionInfo>
            <S.Ball color="#FFC77D" />
            <S.Info>
              Ciclo: {cycle}
              <S.Total>/{totalCycle}</S.Total>
            </S.Info>
          </S.SectionInfo>
          <S.SectionInfo>
            <S.Ball color="#5EFF5A" />
            <S.Info>
              Progresso: +{progressCycle}
              <S.Total> Ciclo,</S.Total> +{progressMinutes}
              <S.Total> Minutos</S.Total>
            </S.Info>
          </S.SectionInfo>
        </S.BackgroundInfos>
      </S.ContainerInfos>
    </S.Container>
  );
};

export default Graph;
