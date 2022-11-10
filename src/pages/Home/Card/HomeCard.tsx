import React, { useState } from "react";
import * as S from "./HomeCard.styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";
import Header from "../../../components/Header/Header";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Progress from "./Components/Progress/Progress";
import Card from "./Components/Card/Card";
import Button from "../../../components/Button/Button";
import ModalBuy from "../../../components/Modals/ModalBuy/ModalBuy";
import ModalCard from "../../../components/Modals/ModalCard/ModalCard";
import Accordion from "./Components/Accordion/Accordion";

const HomeCard: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCard, setModalCard] = useState(false);

  return (
    <S.Container>
      <Header
        title="Cards"
        action={() => navigation.navigate("SettingsCards")}
      />
      <S.Scroll>
        <S.Padding>
          <S.SectionTitle>
            <Feather name="clock" size={24} color="#09CBDA" />
            <S.Title>Revisões pendentes</S.Title>
          </S.SectionTitle>
          <Progress value={32} total={82} />

          <S.ScrollHorizontal horizontal={true}>
            <Card
              value={15}
              type="new"
              color="#04BF7B"
              onPress={() => navigation.navigate("QuestionEdit")}
            />
            <Card
              text="Penal"
              value={15}
              type="repeat"
              color="#FF4341"
              onPress={() => navigation.navigate("Question")}
            />
            <Card
              text="Processo Civil"
              value={15}
              type="repeat"
              color="#EBC827"
            />
            <Card
              text="Constitucional"
              value={15}
              type="repeat"
              color="#09CBDA"
            />
            <Card
              text="Administrativo"
              value={15}
              type="repeat"
              color="#767676"
            />
          </S.ScrollHorizontal>
          <S.Button>
            <Button
              text="Resolver aleatóriamente"
              type="dark"
              onPress={() => navigation.navigate("Activity")}
            />
          </S.Button>
          <S.SectionTitle>
            <AntDesign name="bars" size={24} color="#09CBDA" />
            <S.Title>Meus cards</S.Title>
          </S.SectionTitle>
        </S.Padding>

        <S.Accordion>
          <Accordion
            text="Ativar revisões"
            type={expanded}
            onPress={() => setExpanded(!expanded)}
          />
          {expanded && (
            <S.SectionAccordion>
              <Accordion
                text="Penal"
                type="item"
                onPress={() => setModalCard(true)}
              />
              <Accordion text="Cívil" type="item" />
              <Accordion text="Administrativo" type="item" />
              <Accordion text="Constitucional" type="item" />
              <Accordion
                text="Reta Final"
                type="end"
                onPress={() => setModalVisible(true)}
              />
            </S.SectionAccordion>
          )}
        </S.Accordion>

        <S.Padding>
          <S.Button>
            <Button
              onPress={() => navigation.navigate("SettingsAddCard")}
              text="+ ADICIONAR NOVO CARD"
              type="dark"
            />
          </S.Button>
        </S.Padding>
      </S.Scroll>
      <ModalBuy
        open={modalVisible}
        close={() => setModalVisible(!modalVisible)}
      />
      <ModalCard open={modalCard} close={() => setModalCard(!modalCard)} />
    </S.Container>
  );
};

export default HomeCard;
