import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Progress from "../../components/Progress/Progress";
import { propsStack } from "../../routes/Models";
import CheckboxItem from "./Components/Checkbox/Checkbox";
import * as S from "./Objective.styles";

const ObjectiveYears: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCenter>
          <Progress />
          <S.SectionTitle>
            <S.Title>Quantos anos de estudo você tem até agora?</S.Title>
            <S.SubTitle>
              Recomendaremos um plano adequado a seu objetivo.
            </S.SubTitle>
          </S.SectionTitle>
          <S.SectionOptions>
            <CheckboxItem title="2 anos" />
            <CheckboxItem title="3 anos" />
            <CheckboxItem title="4 anos" />
            <CheckboxItem title="5 anos" />
            <CheckboxItem title="6 anos" />
            <CheckboxItem title="7 anos" />
            <CheckboxItem title="8 anos" />
            <CheckboxItem title="9 anos" />
          </S.SectionOptions>
        </S.ContainerCenter>
        <S.ContainerBottom>
          <S.Next onPress={() => navigation.navigate("ObjectiveHours")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.Scroll>
    </S.Container>
  );
};

export default ObjectiveYears;
