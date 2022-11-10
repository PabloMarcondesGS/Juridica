import React, { useState } from "react";
import * as S from "./HomeStatistic.styles";
import Header from "../../../components/Header/Header";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../../routes/Models";
import General from "./Components/General/General";
import Discipline from "./Components/Discipline/Discipline";
import Ranking from "./Components/Ranking/Ranking";
import Simulated from "./Components/Simulated/Simulated";

const HomeStatistic: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [general, setGeneral] = useState(true);
  const [discipline, setDiscipline] = useState(false);
  const [simulated, setSimulated] = useState(false);
  const [ranking, setRanking] = useState(false);
  const [selected, setSelected] = useState("General");

  function HandleGeneral() {
    setGeneral(true);
    setDiscipline(false);
    setSimulated(false);
    setRanking(false);
    setSelected("General");
  }
  function HandleDiscipline() {
    setGeneral(false);
    setDiscipline(true);
    setSimulated(false);
    setRanking(false);
    setSelected("Discipline");
  }
  function HandleSimulated() {
    setGeneral(false);
    setDiscipline(false);
    setSimulated(true);
    setRanking(false);
    setSelected("Simulated");
  }

  function HandleRanking() {
    setGeneral(false);
    setDiscipline(false);
    setSimulated(false);
    setRanking(true);
    setSelected("Ranking");
  }

  return (
    <S.Container>
      <S.Scroll>
        <Header
          title="estatísticas"
          type="simple"
          action={() => navigation.navigate("SettingsQuestions")}
        />
        <S.SectionOptions>
          <S.ScrollHorizontal horizontal={true}>
            <S.Button onPress={HandleGeneral}>
              <S.Options color={general}>Geral</S.Options>
            </S.Button>
            <S.Button onPress={HandleDiscipline}>
              <S.Options color={discipline}>Disciplinas</S.Options>
            </S.Button>
            <S.Button onPress={HandleSimulated}>
              <S.Options color={simulated}>Simulados</S.Options>
            </S.Button>
            <S.Button onPress={HandleRanking}>
              <S.Options color={ranking}>Ranking</S.Options>
            </S.Button>
          </S.ScrollHorizontal>
        </S.SectionOptions>
        {selected === "General" ? (
          <General />
        ) : selected === "Discipline" ? (
          <Discipline />
        ) : selected === "Simulated" ? (
          <Simulated />
        ) : (
          <Ranking />
        )}
      </S.Scroll>
    </S.Container>
  );
};

export default HomeStatistic;
