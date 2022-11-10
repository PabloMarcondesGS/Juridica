import React, { useState } from "react";
import * as S from "./CycleComplete.styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import Graph from "../../components/Graph/Graph";
import Button from "../../components/Button/Button";
import PerformanceAll from "./Components/PerformanceAll/PerformanceAll";
import PerformanceBig from "./Components/PerformanceBig/PerformanceBig";
import { propsStack } from "../../routes/Models";
import { useNavigation } from "@react-navigation/native";

const CycleComplete: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  const [cards, setCards] = useState(true);
  const [question, setQuestion] = useState(false);
  const [selected, setSelected] = useState(true);
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
      <StatusBar barStyle="light-content" backgroundColor={"#3B0C7A"} />

      <S.Scroll>
        <S.SectionBack>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <S.TitleBack>Resultados</S.TitleBack>
          <S.Empty />
        </S.SectionBack>
        <S.ContainerGraph>
          <Graph
            title="lei seca e doutrina/magistratura"
            minutes={65}
            totalMinutes={90}
            progressMinutes={15}
            cycle={4}
            totalCycle={6}
            progressCycle={1}
          />
        </S.ContainerGraph>
        <S.SectionPerformance>
          <S.SectionTitlePerformance>
            <S.Title>Questões vinculadas</S.Title>
          </S.SectionTitlePerformance>

          <S.ScrollHorizontal horizontal={true}>
            <S.Card>
              <S.SectiontitleCard>
                <S.TitleCard>Ética</S.TitleCard>
                <Ionicons name="close-outline" size={20} color="#767676" />
              </S.SectiontitleCard>
              <S.TextCard>
                O advogado César foi procurado pelo cliente Vinícius, que
                pretendia sua atuação defendendo-o em processo judicial. Ambos,
                então, ajustaram certo valor em honorários, por meio de contrato
                escrito. Na fase de execução do processo, César recebeu
                pagamentos de importâncias devidas a Vinícius e pretende
                realizar a compensação com os créditos de que é titular.{"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                Com base no caso narrado, assinale a afirmativa correta.
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.SectiontitleCard>
                <S.TitleCard>Ética</S.TitleCard>
                <Ionicons name="close-outline" size={20} color="#767676" />
              </S.SectiontitleCard>
              <S.TextCard>
                O advogado César foi procurado pelo cliente Vinícius, que
                pretendia sua atuação defendendo-o em processo judicial. Ambos,
                então, ajustaram certo valor em honorários, por meio de contrato
                escrito. Na fase de execução do processo, César recebeu
                pagamentos de importâncias devidas a Vinícius e pretende
                realizar a compensação com os créditos de que é titular.{"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                Com base no caso narrado, assinale a afirmativa correta.
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.SectiontitleCard>
                <S.TitleCard>Ética</S.TitleCard>
                <Ionicons name="close-outline" size={20} color="#767676" />
              </S.SectiontitleCard>
              <S.TextCard>
                O advogado César foi procurado pelo cliente Vinícius, que
                pretendia sua atuação defendendo-o em processo judicial. Ambos,
                então, ajustaram certo valor em honorários, por meio de contrato
                escrito. Na fase de execução do processo, César recebeu
                pagamentos de importâncias devidas a Vinícius e pretende
                realizar a compensação com os créditos de que é titular.{"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                Com base no caso narrado, assinale a afirmativa correta.
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.SectiontitleCard>
                <S.TitleCard>Ética</S.TitleCard>
                <Ionicons name="close-outline" size={20} color="#767676" />
              </S.SectiontitleCard>
              <S.TextCard>
                O advogado César foi procurado pelo cliente Vinícius, que
                pretendia sua atuação defendendo-o em processo judicial. Ambos,
                então, ajustaram certo valor em honorários, por meio de contrato
                escrito. Na fase de execução do processo, César recebeu
                pagamentos de importâncias devidas a Vinícius e pretende
                realizar a compensação com os créditos de que é titular.{"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                Com base no caso narrado, assinale a afirmativa correta.
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.SectiontitleCard>
                <S.TitleCard>Ética</S.TitleCard>
                <Ionicons name="close-outline" size={20} color="#767676" />
              </S.SectiontitleCard>
              <S.TextCard>
                O advogado César foi procurado pelo cliente Vinícius, que
                pretendia sua atuação defendendo-o em processo judicial. Ambos,
                então, ajustaram certo valor em honorários, por meio de contrato
                escrito. Na fase de execução do processo, César recebeu
                pagamentos de importâncias devidas a Vinícius e pretende
                realizar a compensação com os créditos de que é titular.{"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                Com base no caso narrado, assinale a afirmativa correta.
              </S.TextCard>
            </S.Card>
          </S.ScrollHorizontal>
          <S.ContainerButton>
            <S.Button>
              <Button type="solidMini" text="Resolver questões" />
            </S.Button>
            <S.Button>
              <Button type="outlineMini" text="Salvar em meus cadernos" />
            </S.Button>
          </S.ContainerButton>
        </S.SectionPerformance>

        <S.SectionPerformance>
          <S.SectionTitlePerformance>
            <S.Title>Desempenho</S.Title>
          </S.SectionTitlePerformance>
          <S.SectionButton>
            <S.ButtonQuestionLong
              background={question === true ? "#131418" : "#1F1F23"}
              onPress={HandleCards}
            >
              <S.ButtonTitle color={cards === true ? "#FFFFFF" : "#767676"}>
                Ciclo
              </S.ButtonTitle>
            </S.ButtonQuestionLong>
            <S.ButtonQuestionLong
              background={question === true ? "#1F1F23" : "#131418"}
              onPress={HandleQuestions}
            >
              <S.ButtonTitle color={question === true ? "#FFFFFF" : "#767676"}>
                Disciplina
              </S.ButtonTitle>
            </S.ButtonQuestionLong>
          </S.SectionButton>
          {selected === true ? (
            <S.SectionResults>
              <PerformanceAll />
            </S.SectionResults>
          ) : (
            <S.SectionResults>
              <PerformanceBig />
            </S.SectionResults>
          )}
        </S.SectionPerformance>
      </S.Scroll>
    </S.Container>
  );
};

export default CycleComplete;
