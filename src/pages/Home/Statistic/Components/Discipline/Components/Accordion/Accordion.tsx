import React, { useState } from "react";
import * as S from "./Accordion.styles";
import Book from "../../../../../../../components/Book/Book";
import { AntDesign } from "@expo/vector-icons";
import Performance from "../Performance/Performance";

type IAccordion = {
  value: number;
  discipline: string;
};

const Accordion: React.FC<IAccordion> = ({ value, discipline }) => {
  const [press, setPress] = useState(false);

  return (
    <S.Accordion>
      <S.Container
        onPress={() => setPress(!press)}
        color={press ? "#333336" : "#1F1F23"}
      >
        <S.SectionTop>
          <Book text={discipline} disabled />

          <S.GraphCircle
            color={
              value > 60 ? "#5EFF5A" : value === 50 ? "#FFC77D" : "#FF2D2E"
            }
          >
            <S.Value>
              {value}
              <S.Percentage>{"\n"}%</S.Percentage>
            </S.Value>
          </S.GraphCircle>
        </S.SectionTop>
        <S.Line />
        <S.Arrow>
          {press ? (
            <AntDesign name="up" size={20} color="#767676" />
          ) : (
            <AntDesign name="down" size={20} color="#767676" />
          )}
        </S.Arrow>
      </S.Container>
      {press && (
        <S.Container
          onPress={() => setPress(!press)}
          color={press ? "#333336" : "#1F1F23"}
        >
          <S.SectionResults>
            <S.ResultsInfos>Evolução</S.ResultsInfos>
            <S.Group>
              <AntDesign
                name="caretup"
                size={12}
                color="#5EFF5A"
                style={{
                  marginRight: 10,
                }}
              />
              <S.ResultsInfos>5%</S.ResultsInfos>
            </S.Group>
          </S.SectionResults>
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
          <S.SectionPerformance>
            <S.PerformanceTitle>Desempenho</S.PerformanceTitle>
            <S.Scroll>
              <Performance title="1.LINDB" value={15} />
              <Performance title="1.LINDB" value={85} />

              <Performance title="1.LINDB" value={50} />

              <Performance title="1.LINDB" value={15} />

              <Performance title="1.LINDB" value={80} />

              <Performance title="1.LINDB" value={15} />
            </S.Scroll>
          </S.SectionPerformance>
        </S.Container>
      )}
    </S.Accordion>
  );
};

export default Accordion;
