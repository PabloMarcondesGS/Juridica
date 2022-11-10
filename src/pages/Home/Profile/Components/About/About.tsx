import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../../../../../assets/juridikaBig.png";
import professional from "../../../../../../assets/imageTeste.png";

import * as S from "./About.styles";
interface Props {
  action: () => void;
}

const About: React.FC<Props> = (props: Props) => {
  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCentral>
          <S.ContainerHeader>
            <StatusBar barStyle="light-content" backgroundColor={"#131418"} />

            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="white"
              onPress={props.action}
            />
            <S.TitleHeader>Sobre</S.TitleHeader>
            <S.Empty />
          </S.ContainerHeader>
          <S.Logo source={Logo} />
          <S.SectionTitle>
            <S.Title>Construído por mestres dos concursos</S.Title>
            <S.SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rutrum vel quam vitae fermentum. Curabitur viverra arcu eros, a
              volutpat nisl faucibus id. Vestibulum ultricies semper sem ut
              tempor. Nulla urna magna, sollicitudin a lectus sed, maximus
              accumsan arcu. Fusce et ultrices massa. Vivamus quis dui ac quam
              sollicitudin maximus ut in diam. Proin ullamcorper neque eget
              porta lobortis. Mauris sapien dolor, aliquet et varius sit amet,
              finibus at massa. In malesu
            </S.SubTitle>
          </S.SectionTitle>
          <S.SectionInfo>
            <S.Info>Profissionais envolvidos</S.Info>
          </S.SectionInfo>
          <S.SectionCard>
            <S.Card>
              <S.CardImage source={professional} />
              <S.TitleCard>Gustavo Quinamo</S.TitleCard>
              <S.SubTitleCard>Juíz e Consultor Pedagógico</S.SubTitleCard>
            </S.Card>
            <S.Card>
              <S.CardImage source={professional} />
              <S.TitleCard>Gustavo Quinamo</S.TitleCard>
              <S.SubTitleCard>Juíz e Consultor Pedagógico</S.SubTitleCard>
            </S.Card>
          </S.SectionCard>
        </S.ContainerCentral>
      </S.Scroll>
    </S.Container>
  );
};

export default About;
