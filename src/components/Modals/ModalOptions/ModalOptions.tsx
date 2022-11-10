import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalOptions.styles";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../Input/Input";

const ModalOptions: React.FC<IModal> = ({
  type,
  buttons,
  title,
  text,
  close,
  open,
  action1,
  action2,
  action3,
  action4,
  action5,
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
        {type === "select" ? (
          <S.ContainerModal>
            <S.SectionTitle>
              <S.Title>{title}</S.Title>
              <Ionicons
                name="ios-close"
                size={22}
                color="#767676"
                onPress={close}
              />
            </S.SectionTitle>
            <S.Input>
              <Input
                label=""
                type="search"
                placeholder="Digite aqui sua pesquisa"
              />
            </S.Input>
            {buttons?.map((button) => (
              <S.Buttons>
                <S.TextButton>{button}</S.TextButton>
              </S.Buttons>
            ))}
          </S.ContainerModal>
        ) : type === "noSearch" ? (
          <S.ContainerModal>
            <S.SectionTitleNoSearch>
              <S.TitleNoSearch>{title}</S.TitleNoSearch>
              <Ionicons
                name="ios-close"
                size={22}
                color="#767676"
                onPress={close}
              />
            </S.SectionTitleNoSearch>

            <S.Buttons onPress={action1}>
              <S.TextButton>EDITAR CARD</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action2}>
              <S.TextButton>adicionar card personalizado</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action3}>
              <S.TextButton>Reiniciar repetição espaçada</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action4}>
              <S.TextButton>Desativar card</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action5}>
              <S.TextButton>apagar card</S.TextButton>
            </S.Buttons>
          </S.ContainerModal>
        ) : type === "noSearchBlock" ? (
          <S.ContainerModal>
            <S.SectionTitleNoSearch>
              <S.TitleNoSearch>{title}</S.TitleNoSearch>
              <Ionicons
                name="ios-close"
                size={22}
                color="#767676"
                onPress={close}
              />
            </S.SectionTitleNoSearch>

            <S.Buttons onPress={action1}>
              <S.TextButton>EDITAR CARD</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action2}>
              <S.TextButton>adicionar card personalizado</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action3}>
              <S.TextButton>Reiniciar repetição espaçada</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action4}>
              <S.TextButton>Desativar card</S.TextButton>
            </S.Buttons>
            <S.ButtonsBlock onPress={action5}>
              <S.TextButton>apagar card</S.TextButton>
            </S.ButtonsBlock>
          </S.ContainerModal>
        ) : type === "moreOptions" ? (
          <S.ContainerModal>
            <S.SectionTitleNoSearch>
              <S.TitleMoreOptions>{title}</S.TitleMoreOptions>
              <Ionicons
                name="ios-close"
                size={22}
                color="#767676"
                onPress={close}
              />
            </S.SectionTitleNoSearch>

            <S.Buttons onPress={action1}>
              <S.TextButton>Adiconar aos cadernos</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action2}>
              <S.TextButton>adicionar card personalizado</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action3}>
              <S.TextButton>Visualizar filtros</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action4}>
              <S.TextButton>dar feedback</S.TextButton>
            </S.Buttons>
            <S.Buttons onPress={action5}>
              <S.TextButton>comentar questão</S.TextButton>
            </S.Buttons>
          </S.ContainerModal>
        ) : (
          <S.ContainerModal>
            <S.SectionTitle>
              <S.Title>{title}</S.Title>
              <Ionicons
                name="ios-close"
                size={22}
                color="#767676"
                onPress={close}
              />
            </S.SectionTitle>
            <S.Text>{text}</S.Text>
          </S.ContainerModal>
        )}
      </S.Container>
    </S.Modal>
  );
};

export default ModalOptions;
