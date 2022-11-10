import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Progress from "../../components/Progress/Progress";
import { propsStack } from "../../routes/Models";
import CheckboxItem from "./Components/Checkbox/Checkbox";
import * as S from "./Objective.styles";

const ObjectiveHours: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCenter>
          <Progress />
          <S.SectionTitle>
            <S.Title>Média de horas diárias dedicadas à preparação</S.Title>
            <S.SubTitle>
              Recomendaremos um plano adequado a seu objetivo.
            </S.SubTitle>
          </S.SectionTitle>
          <S.SectionOptions>
            <CheckboxItem title="1h" />
            <CheckboxItem title="1h30m" />
            <CheckboxItem title="2h" />
            <CheckboxItem title="2h30m" />
            <CheckboxItem title="3h" />
            <CheckboxItem title="3h30m" />
            <CheckboxItem title="4h" />
            <CheckboxItem title="4h30m" />
          </S.SectionOptions>
        </S.ContainerCenter>
        <S.ContainerBottom>
          <S.Next onPress={() => navigation.navigate("ObjectiveApprovals")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.Scroll>
    </S.Container>
  );
};

export default ObjectiveHours;
