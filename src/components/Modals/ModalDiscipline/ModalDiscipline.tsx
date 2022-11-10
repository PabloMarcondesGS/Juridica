import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalDiscipline.styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "../../Input/Input";
import Accordion from "./Components/Accordion/Accordion";
import Button from "../../Button/Button";

const ModalDiscipline: React.FC<IModal> = ({
  close,
  color,
  open,
  ...props
}) => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Modal
      animationType="slide"
      visible={open}
      transparent={true}
      {...props}
      onRequestClose={() => close}
    >
      <S.Scroll>
        <S.Container color={color}>
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
            <Button
              text="Resolver Aleatoriamente"
              type="dark"
              onPress={() => navigation.navigate("Activity")}
            />
            <S.SectionTitle>
              <S.TitleBottom>Escolha as matérias</S.TitleBottom>
            </S.SectionTitle>
            <S.Input>
              <Input
                label=""
                type="search"
                placeholder="Digite aqui sua pesquisa"
              />
            </S.Input>

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
    </S.Modal>
  );
};

export default ModalDiscipline;
