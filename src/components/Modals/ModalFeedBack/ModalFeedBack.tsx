import React, { useState } from "react";
import { IModal } from "../Modal.interface";
import * as S from "./ModalFeedBack.styles";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../Button/Button";
import ModalSucess from "../ModalSucess/ModalSucess";
import CheckboxItem from "./Components/Checkbox/Checkbox";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";

const ModalFeedBack: React.FC<IModal> = ({
  subTextSucess,
  textSucess,
  close,
  open,
  ...props
}) => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation<propsStack>();

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
          <S.Scroll>
            <S.ContainerTop>
              <S.Empty />
              <S.Title>FeedBack</S.Title>
              <Ionicons
                name="ios-close"
                size={24}
                color="#767676"
                onPress={close}
              />
            </S.ContainerTop>
            <S.ContainerCentral>
              <S.SectionCard>
                <S.ContainerCard>
                  <S.SectionTextCard>
                    <S.SectionTopCard>
                      <S.TitleCard>imposto residual</S.TitleCard>
                      <Ionicons
                        name="ios-close"
                        size={18}
                        color="#767676"
                        onPress={close}
                      />
                    </S.SectionTopCard>
                    <S.TextCard>
                      Pertencem aos Estados e DF{"\n"}
                      <S.TextCardBackground>[...]</S.TextCardBackground> do
                      valor arrecadado {"\n"}com o imposto residual
                    </S.TextCard>
                  </S.SectionTextCard>
                  <S.SectionBottomCard>
                    <S.LineHorizontal />
                    <S.SectionInfos>
                      <S.Infos>
                        <S.Info>Direito Tributário</S.Info>
                        <S.SubInfo>
                          5. Repartição das receitas tributárias
                        </S.SubInfo>
                      </S.Infos>
                    </S.SectionInfos>
                  </S.SectionBottomCard>
                </S.ContainerCard>
              </S.SectionCard>
              <S.SectionOptions>
                <S.Title>Descreva o problema</S.Title>
                <CheckboxItem title="Má redação" />
                <CheckboxItem title="Informação errada" />
                <CheckboxItem title="Conteúdo desatualizado" />
                <CheckboxItem title="Outros" />
              </S.SectionOptions>
            </S.ContainerCentral>
            <S.ContainerBottom>
              <Button
                text="enviar feedback"
                type="solid"
                onPress={() => setModal(true)}
              />
            </S.ContainerBottom>
          </S.Scroll>
          <ModalSucess
            open={modal}
            action={() => navigation.navigate("Home")}
            close={() => setModal(!modal)}
            textSucess="Obrigado pelo feedback!"
            subTextSucess="Essas informações serão de extrema importância para seguirmos melhorando o produto. "
            titleSucess="feedback"
          />
        </S.Container>
      </S.ContainerModal>
    </S.Modal>
  );
};

export default ModalFeedBack;
