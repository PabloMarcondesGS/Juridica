import React, { useState } from "react";
import * as S from "./Results.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { StatusBar } from "react-native";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ModalSucess from "../../components/Modals/ModalSucess/ModalSucess";

const ResultsComplete: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [value, setValue] = useState(86);
  const [isChecked, setChecked] = useState(false);
  const [modalRevision, setModalRevision] = useState(false);
  const [activated, setActivated] = useState(false);

  function HandleButton() {
    setModalRevision(true);
    setActivated(true);
  }

  return (
    <S.Container>
      <S.Scroll>
        <StatusBar barStyle="light-content" backgroundColor={"#3B0C7A"} />
        <S.Sectiontitle>
          <S.Empty />
          <S.TitleBack>Resultados</S.TitleBack>
          <Ionicons
            name="close-outline"
            size={30}
            color="#767676"
            onPress={() => navigation.navigate("Home")}
          />
        </S.Sectiontitle>
        <S.SectionGraphCircle>
          <S.Title>Ciclo Concluído</S.Title>
          <S.BackgroundGraphCircleTotal>
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
                  {"\n"}
                  <S.Percentage>%</S.Percentage>
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
            <S.SectionResults>
              <S.ResultsInfos>Respondidos</S.ResultsInfos>
              <S.ResultsInfos>108</S.ResultsInfos>
            </S.SectionResults>
            <S.SectionResults>
              <S.ResultsInfos>Duração do Ciclo</S.ResultsInfos>
              <S.ResultsInfos>47 min</S.ResultsInfos>
            </S.SectionResults>
            <S.Button>
              <Button
                text="ver gabarito"
                type="dark"
                onPress={() => navigation.navigate("List")}
              />
            </S.Button>
          </S.BackgroundGraphCircleTotal>
        </S.SectionGraphCircle>
        <S.SectionPerformance>
          <S.SectionTitlePerformance>
            <S.Title>Desempenho</S.Title>
          </S.SectionTitlePerformance>
          <S.BackgroundGraph>
            <S.Graph source={require("../../../assets/BackgroundLines.png")}>
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
          </S.BackgroundGraph>
          <S.SectionTitlePerformance>
            <S.Title>Questões Relacionadas</S.Title>
          </S.SectionTitlePerformance>

          <S.ScrollHorizontal horizontal={true}>
            <Card ative={isChecked} type="secondary" />
            <Card ative={isChecked} type="secondary" />
            <Card ative={isChecked} type="secondary" />
            <Card ative={isChecked} type="secondary" />
            <Card ative={isChecked} type="secondary" />
            <Card ative={isChecked} type="secondary" />
          </S.ScrollHorizontal>
          <S.SectionButton>
            <S.ButtonBlocked opacity={activated === true ? 0.3 : 1}>
              <Button
                type="solid"
                text="ativar revisões"
                onPress={HandleButton}
                disabled={activated}
              />
            </S.ButtonBlocked>
          </S.SectionButton>
        </S.SectionPerformance>
      </S.Scroll>
      <ModalSucess
        open={modalRevision}
        close={() => setModalRevision(!modalRevision)}
        type="noButton"
        textSucess="Revisão ativada"
        subTextSucess="Esse conteúdo foi incluído em sua pasta de novos cards!"
      />
    </S.Container>
  );
};

export default ResultsComplete;
