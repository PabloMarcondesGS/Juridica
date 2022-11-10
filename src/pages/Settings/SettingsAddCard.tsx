import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import * as S from "./Settings.styles";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ModalOptions from "../../components/Modals/ModalOptions/ModalOptions";

const Contents = ["Lei seca e doutrina", "informativos", "súmulas"];
const Discipline = ["direito civil", "Direito constitucional", "Direito penal"];
const Matters = [
  "responsabilidade civil",
  "Direito das sucessões",
  "Direito real",
];

const SettingsAddCard: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  const [omissionSelected, setOmissionSelected] = useState(true);
  const [modalCard, setModalCard] = useState(false);
  const [omissionModal, setOmissionModal] = useState(false);
  const [contentModal, setContentModal] = useState(false);
  const [disciplineModal, setDisciplineModal] = useState(false);
  const [mattersModal, setMattersModal] = useState(false);
  const [omission, setOmission] = useState(true);
  const [front, setFront] = useState(false);

  function HandleOmission() {
    setOmission(true);
    setFront(false);
    setOmissionSelected(true);
  }

  function HandleFront() {
    setOmission(false);
    setFront(true);
    setOmissionSelected(false);
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
      <S.Scroll>
        <S.Padding>
          <S.Sectiontitle>
            <S.Empty />
            <S.Title>Adicionar cards</S.Title>

            <Ionicons
              name="close-outline"
              size={28}
              color="#767676"
              onPress={() => navigation.goBack()}
            />
          </S.Sectiontitle>
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

          <S.SectionButton>
            <S.ButtonQuestion
              background={omission === true ? "#1F1F23" : "#131418"}
              onPress={HandleOmission}
            >
              <S.ButtonTitle color={omission === true ? "#FFFFFF" : "#767676"}>
                Omissão de Palavra(s)
              </S.ButtonTitle>
            </S.ButtonQuestion>
            <S.ButtonQuestion
              background={front === true ? "#1F1F23" : "#131418"}
              onPress={HandleFront}
            >
              <S.ButtonTitle color={front === true ? "#FFFFFF" : "#767676"}>
                Frente e Verso
              </S.ButtonTitle>
            </S.ButtonQuestion>
          </S.SectionButton>
          {omissionSelected === true ? (
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
                <Input
                  type="big"
                  label="Questão"
                  placeholder="Escreva aqui..."
                />
                <S.Input>
                  <Input
                    type="medium"
                    label="Resposta"
                    placeholder="Escreva aqui..."
                  />
                </S.Input>
              </S.SectionInput>
            </View>
          ) : (
            <View>
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
          )}

          <S.SectionButtonView>
            <Button text="visualizar card" type="eye" />
          </S.SectionButtonView>
        </S.Padding>
      </S.Scroll>
      <S.ContainerButton>
        <Button text="AdiciONAR CARD" type="solidWhite" />
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
    </S.Container>
  );
};

export default SettingsAddCard;
