import React, { useState } from "react";
import * as S from "./Search.styles";
import { AntDesign } from "@expo/vector-icons";
import Filter from "../../../../../components/Filter/Filter";
import Button from "../../../../../components/Button/Button";
import Checkbox from "expo-checkbox";
import ModalSelectFilter from "../../../../../components/Modals/ModalSelectFilter/ModalSelectFilter";
import { banking, discipline, matter, relevance, year } from "./Ifilter";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../../../routes/Models";

const Search: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [content, setContent] = useState<any>();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  function HandleDiscipline() {
    setTitle("Disciplina");
    setText("Selecione as disciplinas que deseja incluir no filtro.");
    setContent(discipline);
    setModalVisible(true);
  }

  function HandleMatter() {
    setTitle("Matérias");

    setText("Selecione as matérias que deseja incluir no filtro.");
    setContent(matter);
    setModalVisible(true);
  }

  function HandleBanking() {
    setTitle("Banca");
    setText("Selecione as bancas que deseja incluir no filtro.");
    setContent(banking);
    setModalVisible(true);
    setTitle("Matérias");
  }

  function HandleYear() {
    setTitle("Ano");

    setText("Selecione os anos que deseja incluir no filtro.");
    setContent(year);
    setModalVisible(true);
  }

  function HandleRelevance() {
    setTitle("Relevância");

    setText("Selecione a relevãncia que deseja incluir no filtro.");
    setContent(relevance);
    setModalVisible(true);
  }

  return (
    <S.Container>
      <S.SectionTitle>
        <AntDesign name="bars" size={24} color="#09CBDA" />
        <S.Title>Buscar questões</S.Title>
      </S.SectionTitle>
      <S.SubTitle>Filtros</S.SubTitle>
      <S.SectionFilter>
        <Filter
          title="disciplina"
          filter="Direito Penal"
          action={HandleDiscipline}
        />
        <Filter title="Matéria" filter="Direito Penal" action={HandleMatter} />
        <Filter title="BANCA" action={HandleBanking} />
        <Filter title="ano" action={HandleYear} />
        <Filter title="Relevância" action={HandleRelevance} />
      </S.SectionFilter>
      <S.SubTitle>Restingir ao</S.SubTitle>
      <S.CheckBox>
        <Checkbox
          color={isChecked ? "#5EFF5A" : undefined}
          value={isChecked}
          onValueChange={setChecked}
        />
        <S.CheckBoxTitle>Conteúdo Revisado</S.CheckBoxTitle>
      </S.CheckBox>
      <S.SectionButton>
        <Button text="limpar filtros" type="red" />
        <Button
          text="filtrar"
          type="solid"
          onPress={() => navigation.navigate("Activity")}
        />
      </S.SectionButton>
      <ModalSelectFilter
        title={title}
        text={text}
        content={content}
        open={modalVisible}
        close={() => setModalVisible(!modalVisible)}
      />
    </S.Container>
  );
};

export default Search;
