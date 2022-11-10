import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalSelectFilter.styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Input from "../../Input/Input";
import CheckboxItem from "../../Checkbox/Checkbox";

const ModalSelectFilter: React.FC<IModal> = ({
  title,
  text,
  close,
  open,
  content,
  ...props
}) => {
  return (
    <S.Modal
      animationType="slide"
      visible={open}
      transparent={true}
      {...props}
      onRequestClose={() => close}
    >
      <S.Container>
        <S.ContainerModal>
          <S.Scroll>
            <S.Padding>
              <S.SectionTitle>
                <S.Title>{title}</S.Title>
                <Ionicons
                  name="ios-close"
                  size={22}
                  color="#767676"
                  onPress={close}
                />
              </S.SectionTitle>
              <S.SubTitle>{text}</S.SubTitle>
              <Input
                label=""
                type="search"
                placeholder="Digite aqui sua pesquisa"
              />
              {content &&
                content.map((itens: any) => (
                  <CheckboxItem key={itens.id} title={itens.title} />
                ))}
            </S.Padding>
          </S.Scroll>
          <S.SectionNext>
            <S.Next onPress={close}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={40}
                color="black"
              />
            </S.Next>
          </S.SectionNext>
        </S.ContainerModal>
      </S.Container>
    </S.Modal>
  );
};

export default ModalSelectFilter;
