import React from "react";
import * as S from "./Splash.styles";
import { Entypo } from "@expo/vector-icons";
import Image from "../../../assets/onboardingPeople.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { Feather } from "@expo/vector-icons";

const SplashContent: React.FC = () => {
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
          <S.Image source={Image} />
          <S.SectionTitle>
            <S.Title>
              Método de <S.TitleColor>Seleção{"\n"} do Conteúdo</S.TitleColor>
            </S.Title>
            <S.SubTitle>
              O conteúdo foi elaborado após a análise das questões cobradas nos
              ultimos 5 anos, em cada carreira, ranqueando-se os dispositivos
              legais e conceitos doutrinários de maior incidência, além dos
              principais julgados e súmulas, garantindo que você, de fato,
              estude aquilo que mais cai.
            </S.SubTitle>
          </S.SectionTitle>
        </S.ContainerCentral>
        <S.ContainerBottom>
          <S.SectionTitleBottom></S.SectionTitleBottom>
          <S.Next onPress={() => navigation.navigate("SplashFinalStretch")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.ContainerTotal>
    </S.Container>
  );
};

export default SplashContent;
