import React, { useState } from "react";
import * as S from "./General.styles";
import { AntDesign } from "@expo/vector-icons";
import Logo from "../../../../../../assets/miniLogo.png";
import PerformanceAll from "./Components/PerformanceAll/PerformanceAll";
import PerformanceBig from "./Components/PerformanceBig/PerformanceBig";

const General: React.FC = () => {
  const [today, setToday] = useState(true);
  const [oneWeek, setOneWeek] = useState(false);
  const [oneMonth, setOneMonth] = useState(false);
  const [ever, setEver] = useState(false);
  const [value, setValue] = useState(50);
  const [cards, setCards] = useState(true);
  const [question, setQuestion] = useState(false);
  const [selected, setSelected] = useState(true);

  function HandleToday() {
    setToday(true);
    setOneWeek(false);
    setOneMonth(false);
    setEver(false);
    setValue(50);
  }

  function HandleOneWeek() {
    setToday(false);
    setOneWeek(true);
    setOneMonth(false);
    setEver(false);
    setValue(40);
  }

  function HandleOneMonth() {
    setToday(false);
    setOneWeek(false);
    setOneMonth(true);
    setEver(false);
    setValue(10);
  }

  function HandleEver() {
    setToday(false);
    setOneWeek(false);
    setOneMonth(false);
    setEver(true);
    setValue(80);
  }

  function HandleCards() {
    setCards(true);
    setQuestion(false);
    setSelected(true);
  }

  function HandleQuestions() {
    setCards(false);
    setQuestion(true);
    setSelected(false);
  }

  return (
    <S.Container>
      <S.BackgroundGraph>
        <S.SectionFilter>
          <S.ButtonFilter
            background={today === true ? "#323236" : "#1F1F23"}
            onPress={HandleToday}
          >
            <S.FilterTitle color={today === true ? "#FFFFFF" : "#767676"}>
              Hoje
            </S.FilterTitle>
          </S.ButtonFilter>
          <S.ButtonFilter
            background={oneWeek === true ? "#323236" : "#1F1F23"}
            onPress={HandleOneWeek}
          >
            <S.FilterTitle color={oneWeek === true ? "#FFFFFF" : "#767676"}>
              7 Dias
            </S.FilterTitle>
          </S.ButtonFilter>
          <S.ButtonFilter
            background={oneMonth === true ? "#323236" : "#1F1F23"}
            onPress={HandleOneMonth}
          >
            <S.FilterTitle color={oneMonth === true ? "#FFFFFF" : "#767676"}>
              30 Dias
            </S.FilterTitle>
          </S.ButtonFilter>

          <S.ButtonFilter
            background={ever === true ? "#323236" : "#1F1F23"}
            onPress={HandleEver}
          >
            <S.FilterTitle color={ever === true ? "#FFFFFF" : "#767676"}>
              Sempre
            </S.FilterTitle>
          </S.ButtonFilter>
        </S.SectionFilter>

        <S.TopGraph>
          <S.GraphCircle
            color={
              value > 60
                ? "#5EFF5A"
                : value === 50
                ? "#FFC77D"
                : value < 40
                ? "#FF2D2E"
                : "#E8680C"
            }
          >
            <S.Value>
              {value}
              <S.Percentage>{"\n"}%</S.Percentage>
            </S.Value>
          </S.GraphCircle>
          <S.Results>
            <S.ResultsInfo>Competitividade:</S.ResultsInfo>
            <S.SectionInfos>
              <S.Ball color="#FF2D2E" />
              <S.Info>
                Baixa: <S.InfoValue>0 - 40%</S.InfoValue>
              </S.Info>
            </S.SectionInfos>
            <S.SectionInfos>
              <S.Ball color="#FFC77D" />
              <S.Info>
                Média:<S.InfoValue> 41% - 60%</S.InfoValue>
              </S.Info>
            </S.SectionInfos>
            <S.SectionInfos>
              <S.Ball color="#5EFF5A" />
              <S.Info>
                Alta: <S.InfoValue>61% - 100%</S.InfoValue>
              </S.Info>
            </S.SectionInfos>
          </S.Results>
        </S.TopGraph>

        <S.SectionAlert>
          <S.Logo source={Logo} />
          <S.AlertText>
            Com esse desempenho, você teria{" "}
            <S.AlertTextGold>média probabilidade</S.AlertTextGold> de aprovação
            na primeira{"\n"} fase do exame da OAB.
          </S.AlertText>
        </S.SectionAlert>
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
      </S.BackgroundGraph>

      <S.SectionButton>
        <S.ButtonQuestionLong
          background={cards === true ? "#1F1F23" : "#131418"}
          onPress={HandleCards}
        >
          <S.ButtonTitle color={cards === true ? "#FFFFFF" : "#767676"}>
            Cards
          </S.ButtonTitle>
        </S.ButtonQuestionLong>
        <S.ButtonQuestionLong
          background={question === true ? "#1F1F23" : "#131418"}
          onPress={HandleQuestions}
        >
          <S.ButtonTitle color={question === true ? "#FFFFFF" : "#767676"}>
            Questões
          </S.ButtonTitle>
        </S.ButtonQuestionLong>
      </S.SectionButton>
      {selected === true ? <PerformanceAll /> : <PerformanceBig />}
    </S.Container>
  );
};

export default General;
