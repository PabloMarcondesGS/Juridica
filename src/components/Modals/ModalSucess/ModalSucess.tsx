import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalSucess.styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Button from "../../Button/Button";
import { View } from "react-native";

const ModalSucess: React.FC<IModal> = ({
  subTextSucess,
  textSucess,
  titleSucess,
  action,
  close,
  type,
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
        <S.ContainerTop>
          <S.Empty />
          <S.Title>{titleSucess}</S.Title>
          <Ionicons
            name="ios-close"
            size={24}
            color="#767676"
            onPress={close}
          />
        </S.ContainerTop>

        <S.ContainerCentral>
          <AntDesign name="checkcircleo" size={100} color="#5EFF5A" />
          <S.Text>{textSucess}</S.Text>
          <S.SubText>{subTextSucess}</S.SubText>
        </S.ContainerCentral>
        <S.ContainerBottom>
          {type === "noButton" ? (
            <View></View>
          ) : (
            <Button text="ok" type="solid" onPress={action} />
          )}
        </S.ContainerBottom>
      </S.Container>
    </S.Modal>
  );
};

export default ModalSucess;
