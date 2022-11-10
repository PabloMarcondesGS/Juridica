import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalRevision.styles";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Button from "../../Button/Button";

const ModalRevision: React.FC<IModal> = ({
  subTextSucess,
  textSucess,
  titleSucess,
  close,
  open,
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
      <S.ContainerModal>
        <S.ContainerOpacity />
        <S.Container>
          <S.ContainerTop>
            <S.Title>{titleSucess}</S.Title>
          </S.ContainerTop>

          <S.ContainerCentral>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={100}
              color="#5EFF5A"
            />
            <S.Text>{textSucess}</S.Text>
            <S.SubText>{subTextSucess}</S.SubText>
          </S.ContainerCentral>
          <S.ContainerBottom>
            <Button onPress={close} text="revisão relâmpago" type="revision" />
          </S.ContainerBottom>
        </S.Container>
      </S.ContainerModal>
    </S.Modal>
  );
};

export default ModalRevision;
