import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import * as S from "./AddQuestion.styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import Button from "../../components/Button/Button";
import Book from "../../components/Book/Book";
import Checkbox from "expo-checkbox";

const AddQuestion: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  const [isChecked, setChecked] = useState(false);

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
      <S.ScrollNoPadding>
        <S.Padding>
          <S.Sectiontitle>
            <S.Empty />
            <S.Title>Adicionar</S.Title>

            <Ionicons
              name="close-outline"
              size={28}
              color="#767676"
              onPress={() => navigation.goBack()}
            />
          </S.Sectiontitle>
        </S.Padding>

        <S.SectionTitle>
          <AntDesign name="bars" size={24} color="#09CBDA" />
          <S.TitleInfos>Escolher Carderno</S.TitleInfos>
        </S.SectionTitle>
        <S.Padding>
          <S.SectionBook>
            <Book type="create" text="Criar Novo Caderno" />
          </S.SectionBook>

          <S.SectionBook>
            <Book type="new" text="Novas Questões" />
            <Checkbox
              color={isChecked ? "#5EFF5A" : undefined}
              value={isChecked}
              onValueChange={setChecked}
            />
          </S.SectionBook>
          <S.SectionBook>
            <Book type="normal" text="Magistratura" />
            <Checkbox
              color={isChecked ? "#5EFF5A" : undefined}
              value={isChecked}
              onValueChange={setChecked}
            />
          </S.SectionBook>
          <S.SectionBook>
            <Book type="normal" text="Direito Tributário" />
            <Checkbox
              color={isChecked ? "#5EFF5A" : undefined}
              value={isChecked}
              onValueChange={setChecked}
            />
          </S.SectionBook>
        </S.Padding>
      </S.ScrollNoPadding>
      <S.ContainerButton>
        <Button text="adicionar" type="solidWhite" />
      </S.ContainerButton>
    </S.Container>
  );
};

export default AddQuestion;
