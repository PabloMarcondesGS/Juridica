import React from "react";
import * as S from "./Splash.styles";
import { Entypo } from "@expo/vector-icons";
import Image from "../../../assets/onboardingHourglass.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { Feather } from "@expo/vector-icons";

const SplashFinalStretch: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <S.Container>
      <S.ContainerTotal>
        <S.ContainerTop>
          <Feather
            name="chevron-left"
            size={30}
            color="#767676"
            onPress={() => navigation.goBack()}
          />
          <S.ContainerJump></S.ContainerJump>
        </S.ContainerTop>
        <S.ContainerCentral>
          <S.BorderImage>
            <S.Image source={Image} />
          </S.BorderImage>
          <S.SectionTitle>
            <S.TitleColor>Reta Final</S.TitleColor>
            <S.SubTitle>
              Sempre que uma prova do seu interesse se aproximar, lhe avisaremos
              sobre o melhor momento para iniciar a revisão da reta final,
              oferecendo um conteúdo de cards e questões sob medidas para
              aumentar suas chances de aprovação.
            </S.SubTitle>
          </S.SectionTitle>
        </S.ContainerCentral>
        <S.ContainerBottom>
          <S.SectionTitleBottom></S.SectionTitleBottom>
          <S.Next onPress={() => navigation.navigate("ObjectiveFocus")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.ContainerTotal>
    </S.Container>
  );
};

export default SplashFinalStretch;
