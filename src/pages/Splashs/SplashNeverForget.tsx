import React from "react";
import * as S from "./Splash.styles";
import { Entypo } from "@expo/vector-icons";
import Image from "../../../assets/onboardingHammer.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { Feather } from "@expo/vector-icons";

const SplashNeverForget: React.FC = () => {
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
          <S.ContainerJump>
            <S.Jump>pular</S.Jump>
            <Entypo name="chevron-right" size={14} color="#09CBDA" />
          </S.ContainerJump>
        </S.ContainerTop>
        <S.ContainerCentral>
          <S.Image source={Image} />
          <S.SectionTitle>
            <S.TitleColor>Nunca mais esqueça</S.TitleColor>
            <S.Title>os conteúdos importantes para concursos jurídicos</S.Title>
            <S.SubTitle>
              A Inteligência Artificial do Memoriza combate a curva de
              esquecimento do cérebro e permite fixação do conteúdo estudado por
              mais {"\n"}tempo, através do método de repetição espaçada
            </S.SubTitle>
          </S.SectionTitle>
        </S.ContainerCentral>
        <S.ContainerBottom>
          <S.SectionTitleBottom></S.SectionTitleBottom>
          <S.Next onPress={() => navigation.navigate("SplashLearnIt")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.ContainerTotal>
    </S.Container>
  );
};

export default SplashNeverForget;
