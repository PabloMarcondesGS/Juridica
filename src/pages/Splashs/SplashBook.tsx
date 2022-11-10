import React from "react";
import * as S from "./Splash.styles";
import { Entypo } from "@expo/vector-icons";
import Image from "../../../assets/onboardingBook.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { Feather } from "@expo/vector-icons";

const SplashBook: React.FC = () => {
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
            <S.TitleColor>Cadernos de Erros</S.TitleColor>
            <S.Title>com cards e{"\n"} questões</S.Title>
            <S.SubTitle>
              Obtenha o máximo de rendimento em sua preparação, através da
              integração entre o banco de questões comentadas, e a área de
              cards, criando o caderno de erros perfeito para sua revisão.
            </S.SubTitle>
          </S.SectionTitle>
        </S.ContainerCentral>
        <S.ContainerBottom>
          <S.SectionTitleBottom></S.SectionTitleBottom>
          <S.Next onPress={() => navigation.navigate("SplashContent")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.ContainerTotal>
    </S.Container>
  );
};

export default SplashBook;
