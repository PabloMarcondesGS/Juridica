import React from "react";
import * as S from "./Splash.styles";
import { Entypo } from "@expo/vector-icons";
import Image from "../../../assets/onboardingClock.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { Feather } from "@expo/vector-icons";

const SplashClock: React.FC = () => {
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
            <S.TitleColor>
              15 minutos{" "}
              <S.Title>
                que{"\n"} podem mudar{"\n"} a sua vida
              </S.Title>
            </S.TitleColor>
            <S.SubTitle>
              O Memoriza cria automaticamente, ciclos curtos de revisão que
              podem ser feitos de qualquer lugar, direto do seu celular,{"\n"}
              permitindo o melhor aproveitamento do seu tempo livre.
            </S.SubTitle>
          </S.SectionTitle>
        </S.ContainerCentral>
        <S.ContainerBottom>
          <S.SectionTitleBottom></S.SectionTitleBottom>
          <S.Next onPress={() => navigation.navigate("SplashNeverForget")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.ContainerTotal>
    </S.Container>
  );
};

export default SplashClock;
