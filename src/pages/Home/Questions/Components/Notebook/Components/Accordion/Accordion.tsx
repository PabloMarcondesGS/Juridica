import React, { useState } from "react";
import * as S from "./Accordion.styles";
import { MaterialIcons } from "@expo/vector-icons";
import Progress from "../Progress/Progress";
import Button from "../../../../../../../components/Button/Button";
import CardBook from "../Card/Card";
import Card from "../../../../../Card/Components/Card/Card";
import ModalDiscipline from "../../../../../../../components/Modals/ModalDiscipline/ModalDiscipline";

interface IAccordion {
  value?: number;
  total?: number;
  card: React.ReactNode;
  questions?: {
    title: string;
    text: string;
    id: string;
  }[];
  cardType?: boolean;
}

const Accordion: React.FC<IAccordion> = ({
  card,
  value,
  total,
  questions,
  cardType,
}) => {
  const [press, setPress] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState("");

  function HandleGreen() {
    setModalVisible(true);
    setColor("#04BF7B");
  }
  function HandleYellow() {
    setModalVisible(true);
    setColor("#EBC827");
  }
  function HandleRed() {
    setModalVisible(true);
    setColor("#FF4341");
  }
  function HandleBlue() {
    setModalVisible(true);
    setColor("#09CBDA");
  }

  function HandleGray() {
    setModalVisible(true);
    setColor("#767676");
  }
  return (
    <S.Accordion>
      <S.Container
        color={press === true ? " #1F1F23" : "#131418"}
        onPress={() => setPress(!press)}
      >
        {card}
        {press === true ? (
          <MaterialIcons name="keyboard-arrow-up" size={24} color="#767676" />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#767676" />
        )}
      </S.Container>
      {press && (
        <S.Content>
          {value && <Progress total={total ? total : 0} value={value} />}
          <S.Scroll horizontal={true}>
            {cardType === true ? (
              <S.Cards>
                <Card
                  value={15}
                  type="new"
                  color="#04BF7B"
                  onPress={HandleGreen}
                />
                <Card
                  text="Penal"
                  value={15}
                  type="repeat"
                  color="#FF4341"
                  onPress={HandleRed}
                />
                <Card
                  text="Processo Civil"
                  value={15}
                  type="repeat"
                  color="#EBC827"
                  onPress={HandleYellow}
                />
                <Card
                  text="Constitucional"
                  value={15}
                  type="repeat"
                  color="#09CBDA"
                  onPress={HandleBlue}
                />
                <Card
                  text="Administrativo"
                  value={15}
                  type="repeat"
                  color="#767676"
                  onPress={HandleGray}
                />
              </S.Cards>
            ) : (
              questions &&
              questions.map((question) => (
                <CardBook
                  key={question.id}
                  text={question.text}
                  title={question.title}
                />
              ))
            )}
          </S.Scroll>
          <Button text="Resolver qUESTÕES" type="dark" />
        </S.Content>
      )}
      <ModalDiscipline
        open={modalVisible}
        close={() => setModalVisible(!modalVisible)}
        color={color}
      />
    </S.Accordion>
  );
};

export default Accordion;
