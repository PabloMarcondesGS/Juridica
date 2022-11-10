import React from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalBuy.styles";
import Icon from "../../../../assets/hourglassBig.png";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../Button/Button";

const ModalBuy: React.FC<IModal> = ({ close, open, ...props }) => {
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
          <S.Close>
            <Ionicons
              name="ios-close"
              size={24}
              color="black"
              onPress={close}
            />
          </S.Close>
          <S.Icon source={Icon} />
          <S.Title>Reta Final</S.Title>
        </S.ContainerTop>
        <S.ContainerBottom>
          <S.TitleInfo>
            Você pode acessar o conteúdo do{"\n"} Reta Final de duas formas:
          </S.TitleInfo>
          <S.Steps>
            <S.StepsBackground>
              <S.StepsValue>1</S.StepsValue>
            </S.StepsBackground>
            <S.StepsInfo>
              Compartilhe com amigos o código {"\n"} promocional abaixo de 20%
              de desconto. Se 3 {"\n"} pessoas comprarem qualquer produto do{" "}
              {"\n"} Jurídika com seu código, você ganha o {"\n"} conteúdo
              gratuitamente.
            </S.StepsInfo>
          </S.Steps>
          <S.Code>LATF01</S.Code>
          <S.Steps>
            <S.StepsBackground>
              <S.StepsValue>2</S.StepsValue>
            </S.StepsBackground>
            <S.StepsInfo>Ou se preferir, compre agora</S.StepsInfo>
          </S.Steps>
          <Button text="compre agora" type="solid" />
        </S.ContainerBottom>
      </S.Container>
    </S.Modal>
  );
};

export default ModalBuy;
