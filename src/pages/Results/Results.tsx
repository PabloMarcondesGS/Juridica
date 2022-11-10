import React, { useState } from "react";
import * as S from "./Results.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { StatusBar } from "react-native";
import Image from "../../../assets/BackgroundLines.png";
import Button from "../../components/Button/Button";

const Results: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [value, setValue] = useState(50);
  return (
    <S.Container>
      <S.Scroll>
        <StatusBar barStyle="light-content" backgroundColor={"#3B0C7A"} />
        <S.Sectiontitle>
          <S.Empty />
          <S.TitleBack>resultados</S.TitleBack>
          <Ionicons
            name="close-outline"
            size={30}
            color="#767676"
            onPress={() => navigation.navigate("Home")}
          />
        </S.Sectiontitle>
        <S.SectionGraphCircle>
          <S.Title>Ciclo Concluído</S.Title>
          <S.BackgroundGraphCircle>
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
          </S.BackgroundGraphCircle>
        </S.SectionGraphCircle>
        <S.SectionPerformance>
          <S.SectionTitlePerformance>
            <S.Title>Desempenho</S.Title>
          </S.SectionTitlePerformance>
          <S.BackgroundGraph>
            <S.Graph source={require("../../../assets/BackgroundLines.png")}>
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
              <S.ResultsInfosPrimary>Respondidos</S.ResultsInfosPrimary>
              <S.ResultsInfosPrimary>108</S.ResultsInfosPrimary>
            </S.SectionStatus>
          </S.BackgroundGraph>
          <S.SectionTitlePerformance>
            <S.Title>Questões Relacionadas</S.Title>
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
          <S.SectionButton>
            <Button type="solidWhite" text="Resolver questões" />
            <S.Button>
              <Button
                type="outline"
                text="Salvar em meus cadernos"
                onPress={() => navigation.navigate("AddQuestion")}
              />
            </S.Button>
          </S.SectionButton>
        </S.SectionPerformance>
      </S.Scroll>
    </S.Container>
  );
};

export default Results;
