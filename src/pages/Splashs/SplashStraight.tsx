import React from "react";
import * as S from "./Splash.styles";
import { Entypo } from "@expo/vector-icons";
import Image from "../../../assets/onboardingBookHammer.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";

const SplashStraight: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <S.Container>
      <S.ContainerTotal>
        <S.ContainerTop>
          <S.SectionTitleBottom></S.SectionTitleBottom>

          <S.ContainerJump onPress={() => navigation.navigate("Login")}>
            <S.Jump>já tenho uma conta</S.Jump>
            <Entypo name="chevron-right" size={14} color="#09CBDA" />
          </S.ContainerJump>
        </S.ContainerTop>
        <S.ContainerCentral>
          <S.Image source={Image} />
          <S.SectionTitle>
            <S.Title>
              Aprender <S.TitleColor>Direito</S.TitleColor>
            </S.Title>
            <S.Title>nunca foi tão fácil.</S.Title>
            <S.SubTitle>
              O Memoriza é um novo método de revisão{"\n"} que utiliza
              Inteligência Artificial para você {"\n"} estudar mais o que sabe
              menos, e estudar{"\n"} menos o que sabe mais.
              <S.SubTitleColor>
                O resultado? Seus estudos serão mais produtivos e você vai
                aprender mais, em menos tempo.
              </S.SubTitleColor>
            </S.SubTitle>
          </S.SectionTitle>
        </S.ContainerCentral>
        <S.ContainerBottom>
          <S.SectionTitleBottom>
            <S.TitleBottom>
              Ao continuar você aceita{"\n"} os nossos
              <S.TitleColorBottom> Termos e Condições</S.TitleColorBottom>
            </S.TitleBottom>
          </S.SectionTitleBottom>
          <S.Next onPress={() => navigation.navigate("SplashClock")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBottom>
      </S.ContainerTotal>
    </S.Container>
  );
};

export default SplashStraight;
