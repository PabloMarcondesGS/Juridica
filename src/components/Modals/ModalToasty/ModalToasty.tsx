import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalToasty.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ModalToasty: React.FC<IModal> = ({
  title,
  sucess,
  action,
  close,
  type,
  open,
  ...props
}) => {
  return (
    <S.Modal
      animationType="fade"
      visible={open}
      transparent={true}
      {...props}
      onRequestClose={() => close}
    >
      <S.Container>
        <S.ContainerModal>
          <S.ContainerLeft sucess={sucess}>
            <MaterialCommunityIcons
              name="alert-rhombus-outline"
              size={38}
              color="white"
            />
          </S.ContainerLeft>
          <S.Text>{title}</S.Text>
        </S.ContainerModal>
      </S.Container>
    </S.Modal>
  );
};

export default ModalToasty;
