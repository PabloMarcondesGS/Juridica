import React, { useState } from "react";
import * as S from "./HomeQuestions.styles";
import Header from "../../../components/Header/Header";
import Notebook from "./Components/Notebook/Notebook";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";
import Search from "./Components/Search/Search";
import Simulated from "./Components/Simulated/Simulated";

const HomeQuestions: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [notebook, setNotebook] = useState(true);
  const [search, setSearch] = useState(false);
  const [simulated, setSimulated] = useState(false);
  const [selected, setSelected] = useState("Notebook");

  function HandleNotebook() {
    setNotebook(true);
    setSearch(false);
    setSimulated(false);
    setSelected("Notebook");
  }
  function HandleSearch() {
    setNotebook(false);
    setSearch(true);
    setSimulated(false);
    setSelected("Search");
  }
  function HandleSimulated() {
    setNotebook(false);
    setSearch(false);
    setSimulated(true);
    setSelected("Simulated");
  }

  return (
    <S.Container>
      <S.Scroll>
        <Header
          title="Questões"
          action={() => navigation.navigate("SettingsQuestions")}
        />
        <S.SectionOptions>
          <S.Button onPress={HandleNotebook}>
            <S.Options color={notebook}>Meus Cadernos</S.Options>
          </S.Button>
          <S.Button onPress={HandleSearch}>
            <S.Options color={search}>Buscar</S.Options>
          </S.Button>
          <S.Button onPress={HandleSimulated}>
            <S.Options color={simulated}>Criar Simulado</S.Options>
          </S.Button>
        </S.SectionOptions>
        {selected === "Notebook" ? (
          <Notebook />
        ) : selected === "Search" ? (
          <Search />
        ) : (
          <Simulated />
        )}
      </S.Scroll>
    </S.Container>
  );
};

export default HomeQuestions;
