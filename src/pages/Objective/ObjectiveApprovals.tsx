import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Progress from "../../components/Progress/Progress";
import { propsStack } from "../../routes/Models";
import CheckboxItem from "./Components/Checkbox/Checkbox";
import * as S from "./Objective.styles";

const ObjectiveApprovals: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.ContainerCenter>
        <Progress />
        <S.SectionTitle>
          <S.Title>Quantas aprovações em primeira fase?</S.Title>
          <S.SubTitle>
            Recomendaremos um plano adequado a seu objetivo.
          </S.SubTitle>
        </S.SectionTitle>

        <S.SectionOptionsRow>
          <S.SectionOptions>
            <CheckboxItem title="1" />
            <CheckboxItem title="1" />
            <CheckboxItem title="3" />
            <CheckboxItem title="4" />
          </S.SectionOptions>
          <S.SectionOptions>
            <CheckboxItem title="5" />
            <CheckboxItem title="6" />
            <CheckboxItem title="7" />
            <CheckboxItem title="8" />
          </S.SectionOptions>
        </S.SectionOptionsRow>
      </S.ContainerCenter>
      <S.ContainerBottom>
        <S.Next onPress={() => navigation.navigate("RegistrationPlans")}>
          <Entypo name="chevron-right" size={30} color="black" />
        </S.Next>
      </S.ContainerBottom>
    </S.Container>
  );
};

export default ObjectiveApprovals;
