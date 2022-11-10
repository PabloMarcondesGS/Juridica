import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Progress from "../../components/Progress/Progress";
import { propsStack } from "../../routes/Models";
import Card from "./Components/Card/Card";
import * as S from "./Objective.styles";

const ObjectiveFocus: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.ContainerCenter>
        <Progress />
        <S.SectionTitle>
          <S.Title>Enumere as carreiras em foco</S.Title>
          <S.SubTitle>
            Escolha primeiro a que for mais importante para você, depois a
            segunda e a terceira.
          </S.SubTitle>
        </S.SectionTitle>
        <S.SectionOptions>
          <Card title="Magistratura" value={1} />
          <Card title="Defensoria Pública" value={2} />
          <Card title="Ministério Público" value={3} />
        </S.SectionOptions>
      </S.ContainerCenter>
      <S.ContainerBottom>
        <S.Next onPress={() => navigation.navigate("ObjectiveYears")}>
          <Entypo name="chevron-right" size={30} color="black" />
        </S.Next>
      </S.ContainerBottom>
    </S.Container>
  );
};

export default ObjectiveFocus;
