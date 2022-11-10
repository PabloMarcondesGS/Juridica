import React, { useState } from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalCard.styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "../../Input/Input";
import Accordion from "./Components/Accordion/Accordion";
import ModalOptions from "../ModalOptions/ModalOptions";

const ModalCard: React.FC<IModal> = ({ close, open, ...props }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <S.Modal
      animationType="slide"
      visible={open}
      transparent={true}
      {...props}
      onRequestClose={() => close}
    >
      <S.Scroll>
        <S.Container>
          <S.ContainerTop>
            <S.Close>
              <Ionicons
                name="ios-close"
                size={24}
                color="black"
                onPress={close}
              />
            </S.Close>
            <MaterialCommunityIcons
              name="alert-rhombus-outline"
              size={120}
              color="white"
            />
            <S.Title>Direito Constitucional </S.Title>
            <S.ContainerProgress>
              <S.Progress value={`45%`} />
            </S.ContainerProgress>
            <S.Value>
              45<S.Percentage>%</S.Percentage>
            </S.Value>
          </S.ContainerTop>
          <S.ContainerBottom>
            <S.SectionTitle>
              <S.TitleBottom>Escolha as matérias</S.TitleBottom>
              <MaterialCommunityIcons
                onPress={() => setModalVisible(!modalVisible)}
                name="alert-circle-outline"
                size={24}
                color="white"
              />
            </S.SectionTitle>
            <S.Input>
              <Input
                label=""
                type="search"
                placeholder="Digite aqui sua pesquisa"
              />
            </S.Input>
            <S.ScrollHorizontal horizontal={true}>
              <S.Button>
                <S.ButtonText>todos</S.ButtonText>
              </S.Button>
              <S.Button>
                <S.ButtonText>originais</S.ButtonText>
              </S.Button>
              <S.Button>
                <S.ButtonText>criações</S.ButtonText>
              </S.Button>
              <S.Button>
                <S.ButtonText>edições</S.ButtonText>
              </S.Button>
            </S.ScrollHorizontal>
            <S.SectionAcordion>
              <Accordion
                value="30"
                step="1"
                text="Princípios Gerais 
de Direito Civil"
              />
              <Accordion
                value="30"
                step="1"
                text="Princípios Gerais 
de Direito Civil"
              />
              <Accordion
                value="30"
                step="1"
                text="Princípios Gerais 
de Direito Civil"
              />
            </S.SectionAcordion>
          </S.ContainerBottom>
        </S.Container>
      </S.Scroll>
      <ModalOptions
        title="Escolha as matérias"
        text="Os cards serão automáticamente incluídos na área de revisão."
        open={modalVisible}
        close={() => setModalVisible(!modalVisible)}
      />
    </S.Modal>
  );
};

export default ModalCard;
