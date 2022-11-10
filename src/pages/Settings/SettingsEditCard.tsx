import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import * as S from "./Settings.styles";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ModalOptions from "../../components/Modals/ModalOptions/ModalOptions";
import ModalFeedBack from "../../components/Modals/ModalFeedBack/ModalFeedBack";

const Contents = ["Lei seca e doutrina", "informativos", "súmulas"];
const Discipline = ["direito civil", "Direito constitucional", "Direito penal"];
const Matters = [
  "responsabilidade civil",
  "Direito das sucessões",
  "Direito real",
];

const SettingsEditCard: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [modalCard, setModalCard] = useState(false);
  const [omissionModal, setOmissionModal] = useState(false);
  const [contentModal, setContentModal] = useState(false);
  const [disciplineModal, setDisciplineModal] = useState(false);
  const [mattersModal, setMattersModal] = useState(false);
  const [modalFeedBack, setModalFeedBack] = useState(false);
  const [editedSelected, setEditedSelected] = useState(true);
  const [edited, setEdited] = useState(true);
  const [original, setOriginal] = useState(false);

  function HandleEdited() {
    setEdited(true);
    setOriginal(false);
    setEditedSelected(true);
  }

  function HandleFront() {
    setEdited(false);
    setOriginal(true);
    setEditedSelected(false);
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
      <S.ScrollNoPadding>
        <S.Padding>
          <S.Sectiontitle>
            <S.Empty />
            <S.Title>Editar card</S.Title>

            <Ionicons
              name="close-outline"
              size={28}
              color="#767676"
              onPress={() => navigation.goBack()}
            />
          </S.Sectiontitle>
        </S.Padding>
        <S.SectionButton>
          <S.ButtonQuestionLong
            background={edited === true ? "#1F1F23" : "#131418"}
            onPress={HandleEdited}
          >
            <S.ButtonTitle color={edited === true ? "#FFFFFF" : "#767676"}>
              Editado
            </S.ButtonTitle>
          </S.ButtonQuestionLong>
          <S.ButtonQuestionLong
            background={original === true ? "#1F1F23" : "#131418"}
            onPress={HandleFront}
          >
            <S.ButtonTitle color={original === true ? "#FFFFFF" : "#767676"}>
              Original
            </S.ButtonTitle>
          </S.ButtonQuestionLong>
        </S.SectionButton>

        {editedSelected === true ? (
          <S.Padding>
            <S.SectionInfosRow>
              <S.InfoTitle>Categorização</S.InfoTitle>
              <MaterialCommunityIcons
                onPress={() => setModalCard(true)}
                name="alert-circle-outline"
                size={22}
                color="#09CBDA"
              />
            </S.SectionInfosRow>
            <S.Button onPress={() => setContentModal(true)}>
              <S.SectionTitleButton>
                <S.TitleButton>Tipo de conteúdo</S.TitleButton>
                <S.InfoSubTitle>Selecionar...</S.InfoSubTitle>
              </S.SectionTitleButton>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#767676"
              />
            </S.Button>
            <S.Button onPress={() => setDisciplineModal(true)}>
              <S.SectionTitleButton>
                <S.TitleButton>disciplina</S.TitleButton>
                <S.InfoSubTitle>Selecionar...</S.InfoSubTitle>
              </S.SectionTitleButton>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#767676"
              />
            </S.Button>
            <S.Button onPress={() => setMattersModal(true)}>
              <S.SectionTitleButton>
                <S.TitleButton>Máteria</S.TitleButton>
                <S.InfoSubTitle>Selecionar...</S.InfoSubTitle>
              </S.SectionTitleButton>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#767676"
              />
            </S.Button>
            <S.SectionInfosRow>
              <S.InfoTitle>Card</S.InfoTitle>
            </S.SectionInfosRow>

            <View>
              <S.SectionInfosRow>
                <S.MiniButton>
                  <S.MiniButtonTitle>Adicionar omissão [...]</S.MiniButtonTitle>
                </S.MiniButton>
                <MaterialCommunityIcons
                  onPress={() => setOmissionModal(true)}
                  name="alert-circle-outline"
                  size={22}
                  color="#09CBDA"
                />
              </S.SectionInfosRow>
              <S.SectionInput>
                <Input type="big" label="card" placeholder="Escreva aqui..." />
                <S.Input>
                  <Input
                    type="medium"
                    label="informação extra"
                    placeholder="Escreva aqui..."
                  />
                </S.Input>
              </S.SectionInput>
            </View>
            <S.SectionButtonView>
              <Button text="visualizar card" type="eye" />
            </S.SectionButtonView>
          </S.Padding>
        ) : (
          <S.Padding>
            <S.ContainerCentral>
              <S.SectionTextCard>
                <S.SectionTopCard></S.SectionTopCard>
                <S.TitleCard>imposto residual</S.TitleCard>
                <S.TextCard>
                  Pertencem aos Estados e DF{"\n"}
                  <S.TextCardBackground>20%</S.TextCardBackground> do valor
                  arrecadado {"\n"}com o imposto residual
                </S.TextCard>
              </S.SectionTextCard>
              <S.SectionBottomCard>
                <S.SectionFeedBack onPress={() => setModalFeedBack(true)}>
                  <AntDesign name="questioncircleo" size={20} color="#767676" />
                  <S.TextFeedBack>FEEDBACK</S.TextFeedBack>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={13}
                    color="#767676"
                  />
                </S.SectionFeedBack>
                <S.LineHorizontal color="#767676" />
                <S.SectionInfosCard>
                  <S.Infos>
                    <S.Info>Direito Tributário</S.Info>
                    <S.SubInfo>
                      5. Repartição das receitas tributárias
                    </S.SubInfo>
                  </S.Infos>
                  <S.NumberInfo>#20</S.NumberInfo>
                </S.SectionInfosCard>
              </S.SectionBottomCard>
            </S.ContainerCentral>
            <Button text="VOLTAR AO ORIGINAL" type="outline" />
          </S.Padding>
        )}
      </S.ScrollNoPadding>
      <S.ContainerButton>
        <Button text="SALVAR ALTERAÇÕES" type="solidWhite" />
      </S.ContainerButton>
      <ModalOptions
        open={modalCard}
        close={() => setModalCard(!modalCard)}
        title="Categorização"
        text="Escolha a quais categorias este card estará vinculado."
      />
      <ModalOptions
        open={omissionModal}
        close={() => setOmissionModal(!omissionModal)}
        title="Omissão de palavras"
        text="Para criar um card de omissão de palavras,
        digite a frase desejada, e clique no botão 
        “adicionar omissão” quando desejar omitir
        uma palavra."
      />

      <ModalOptions
        type="select"
        buttons={Discipline}
        open={disciplineModal}
        close={() => setDisciplineModal(!disciplineModal)}
        title=" Selecionar disciplina"
      />

      <ModalOptions
        type="select"
        buttons={Matters}
        open={mattersModal}
        close={() => setMattersModal(!mattersModal)}
        title=" Selecionar matérias"
      />
      <ModalOptions
        type="select"
        buttons={Contents}
        open={contentModal}
        close={() => setContentModal(!contentModal)}
        title=" Selecionar carreira"
      />
      <ModalFeedBack
        open={modalFeedBack}
        close={() => setModalFeedBack(!modalFeedBack)}
      />
    </S.Container>
  );
};

export default SettingsEditCard;
