import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalAlert.styles";
import Icon from "../../../../assets/hourglassBig.png";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../Button/Button";

const ModalAlert: React.FC<IModal> = ({
  type,
  action,
  title,
  text,
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
      <S.Container>
        {type === "noButton" ? (
          <S.ContainerModal>
            <S.ContainerTop>
              <S.Close>
                <Ionicons
                  name="ios-close"
                  size={20}
                  color="#767676"
                  onPress={close}
                />
              </S.Close>
              <MaterialCommunityIcons
                name="alert-rhombus-outline"
                size={120}
                color="white"
              />
            </S.ContainerTop>
            <S.ContainerBottom>
              <S.Title>{title}</S.Title>
              <S.SubTitle>{text}</S.SubTitle>
            </S.ContainerBottom>
          </S.ContainerModal>
        ) : (
          <S.ContainerModal>
            <S.ContainerTop>
              <S.Close>
                <Ionicons
                  name="ios-close"
                  size={20}
                  color="#767676"
                  onPress={close}
                />
              </S.Close>
              <MaterialCommunityIcons
                name="alert-rhombus-outline"
                size={120}
                color="white"
              />
            </S.ContainerTop>
            <S.ContainerBottom>
              <S.Title>{title}</S.Title>
              <S.SubTitle>{text}</S.SubTitle>
              <S.SectionButton>
                <S.Button>
                  <Button onPress={close} type="outline" text="Não" />
                </S.Button>
                <S.Button>
                  <Button type="solid" text="Sim" onPress={action} />
                </S.Button>
              </S.SectionButton>
            </S.ContainerBottom>
          </S.ContainerModal>
        )}
      </S.Container>
    </S.Modal>
  );
};

export default ModalAlert;
