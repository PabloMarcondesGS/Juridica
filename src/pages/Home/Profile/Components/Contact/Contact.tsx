import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Logo from "../../../../../../assets/juridikaBig.png";
import professional from "../../../../../../assets/imageTeste.png";

import * as S from "./Contact.styles";
import Input from "../../../../../components/Input/Input";
import Button from "../../../../../components/Button/Button";
import ModalSucess from "../../../../../components/Modals/ModalSucess/ModalSucess";
interface Props {
  action: () => void;
}

const Contact: React.FC<Props> = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCentral>
          <S.ContainerHeader>
            <StatusBar barStyle="light-content" backgroundColor={"#131418"} />

            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="white"
              onPress={props.action}
            />
            <S.TitleHeader>Fale concosco</S.TitleHeader>
            <S.Empty />
          </S.ContainerHeader>
          <S.SectionTitle>
            <S.Title>Contato</S.Title>
            <S.SubTitle>
              Aqui você pode entrar em contato com nosso suporte
            </S.SubTitle>
          </S.SectionTitle>
          <S.SectionInput>
            <Input label="Mensagem" type="big" placeholder="Escreva aqui..." />
          </S.SectionInput>
          <S.SectionButton>
            <Button
              onPress={() => setModalVisible(true)}
              text="enviar mensagem"
              type="outline"
            />
          </S.SectionButton>
        </S.ContainerCentral>
      </S.Scroll>
      <ModalSucess
        open={modalVisible}
        close={() => setModalVisible(!modalVisible)}
        titleSucess="fale conosco"
        textSucess="Mensagem enviada!"
        subTextSucess="Retornarmos em breve."
      />
    </S.Container>
  );
};

export default Contact;
