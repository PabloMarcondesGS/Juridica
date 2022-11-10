import React from "react";
import * as S from "./CreateNotebook.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";

const CreateNotebook: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.Sectiontitle>
        <S.Empty />
        <S.Title>Criar Novo Caderno</S.Title>

        <Ionicons
          name="close-outline"
          size={28}
          color="#767676"
          onPress={() => navigation.goBack()}
        />
      </S.Sectiontitle>
      <S.NameNotebook>Nome do caderno</S.NameNotebook>
      <S.Input placeholder="MEU CADERNO #01" placeholderTextColor="white" />
    </S.Container>
  );
};

export default CreateNotebook;
