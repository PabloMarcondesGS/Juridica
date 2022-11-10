import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalFilter.styles";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const ModalFilter: React.FC<IModal> = ({
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

          <S.SectionButton>
            <S.Buttons onPress={action1}>
              <S.TextButton>Disciplina</S.TextButton>
              <S.SubTextButton>Direito Penal</S.SubTextButton>
            </S.Buttons>
            <S.Buttons onPress={action2}>
              <S.TextButton>Matéria</S.TextButton>
              <S.SubTextButton>
                Culpabilidade e Erro; Dolo e Culpa...
              </S.SubTextButton>
            </S.Buttons>
            <S.Buttons onPress={action3}>
              <S.TextButton>Banca</S.TextButton>
              <S.SubTextButton>FGV</S.SubTextButton>
            </S.Buttons>
            <S.Buttons onPress={action4}>
              <S.TextButton>ano</S.TextButton>
              <S.SubTextButton>2018</S.SubTextButton>
            </S.Buttons>
            <S.Buttons onPress={action5}>
              <S.TextButton>relevaância</S.TextButton>
              <S.SubTextButton>Todas</S.SubTextButton>
            </S.Buttons>
          </S.SectionButton>
          <Button text="Alterar filtro" type="darkMini" />
          <Button text="voltar" type="outlineMini" />
        </S.ContainerModal>
      </S.Container>
    </S.Modal>
  );
};

export default ModalFilter;
