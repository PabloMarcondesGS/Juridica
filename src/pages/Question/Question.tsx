import React, { useState } from "react";
import * as S from "./Question.styles";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import MiniCard from "../../../assets/miniCards.png";
import ButtonTrouble from "./Components/ButtonTrouble/ButtonTrouble";
import ModalOptions from "../../components/Modals/ModalOptions/ModalOptions";
import ModalRevision from "../../components/Modals/ModalRevision/ModalRevision";
import ModalFeedBack from "../../components/Modals/ModalFeedBack/ModalFeedBack";
import ModalAlert from "../../components/Modals/ModalAlert/ModalAlert";

const Question: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [modal, setModal] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  const [modalRestart, setModalRestart] = useState(false);
  const [modalDisable, setModalDisable] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);
  const [modalRevision, setModalRevision] = useState(false);
  const [modalFeedBack, setModalFeedBack] = useState(false);
  const [answer, SetAnswer] = useState("[...]");
  const [showOptions, setShowOptions] = useState(false);
  const [easy, setEasy] = useState("normal");
  const [medium, setMedium] = useState("normal");
  const [hard, setHard] = useState("normal");
  const [err, setErr] = useState("normal");
  const [color, setColor] = useState("#767676");
  const [deepening, setDeepening] = useState(false);

  function HandleAnswer() {
    SetAnswer("20%");
    setShowOptions(true);
  }

  function HandleEasy() {
    setEasy("selected");
    setMedium("block");
    setHard("block");
    setErr("block");
    setColor("#5EFF5A");
  }

  function HandleMedium() {
    setEasy("block");
    setMedium("selected");
    setHard("block");
    setErr("block");
    setColor("#FFC77D");
  }
  function HandleHard() {
    setEasy("block");
    setMedium("block");
    setHard("selected");
    setErr("block");
    setColor("#E8680C");
    setDeepening(true);
  }
  function HandleErr() {
    setEasy("block");
    setMedium("block");
    setHard("block");
    setErr("selected");
    setColor("#FF2D2E");
    setDeepening(true);
  }

  return (
    <S.Container>
      <S.ContainerTop>
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <S.SectionTop>
          <S.Sectionvalue>
            <S.ValuePrimary>
              01<S.Value>/25</S.Value>
            </S.ValuePrimary>
            <S.LabelValue>CARDS</S.LabelValue>
          </S.Sectionvalue>
          <S.Line />
          <S.Sectionvalue>
            <S.Value>01:35</S.Value>
            <S.LabelValue>minutos</S.LabelValue>
          </S.Sectionvalue>
        </S.SectionTop>
        <Ionicons
          name="ios-close"
          size={30}
          color="#FF2D2E"
          onPress={() => setModalRevision(true)}
        />
      </S.ContainerTop>

      <S.Scroll>
        <S.ContainerCentral>
          <S.SectionTextCard>
            <S.SectionTopCard>
              <S.IconPress onPress={() => setModalAlert(true)}>
                <S.Icon source={MiniCard} />
              </S.IconPress>
              <SimpleLineIcons
                onPress={() => setModal(true)}
                name="options"
                size={24}
                color="white"
              />
            </S.SectionTopCard>
            <S.TitleCard>imposto residual</S.TitleCard>
            <S.TextCard>
              Pertencem aos Estados e DF{"\n"}
              <S.TextCardBackground>{answer}</S.TextCardBackground> do valor
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
            <S.LineHorizontal color={color} />
            <S.SectionInfos>
              <S.Infos>
                <S.Info>Direito Tributário</S.Info>
                <S.SubInfo>5. Repartição das receitas tributárias</S.SubInfo>
              </S.Infos>
              <S.NumberInfo>#20</S.NumberInfo>
            </S.SectionInfos>
          </S.SectionBottomCard>
        </S.ContainerCentral>

        {showOptions === true ? (
          <S.ContainerBottom>
            <S.SectionTrouble>
              {deepening === true ? (
                <S.SectionDeepening>
                  <S.SectionJump>
                    <S.Jump>pular</S.Jump>
                    <Entypo name="chevron-right" size={12} color="#09CBDA" />
                  </S.SectionJump>
                  <S.Button>
                    <Button
                      onPress={() => navigation.navigate("Deepening")}
                      text="Aprofundamento temático"
                      type="deepening"
                    />
                  </S.Button>
                  <S.SectionLine>
                    <S.MiniLine />
                    <S.Info>-</S.Info>

                    <S.MiniLine />
                  </S.SectionLine>
                </S.SectionDeepening>
              ) : (
                <S.TextTrouble>
                  Classifique a dificuldade do card:
                </S.TextTrouble>
              )}
              <S.SectionTButtons>
                <ButtonTrouble
                  onPress={HandleErr}
                  selected={err}
                  title="errei"
                  colorButton="#FF2D2E"
                />
                <ButtonTrouble
                  onPress={HandleHard}
                  selected={hard}
                  title="difícil"
                  colorButton="#E8680C"
                />
                <ButtonTrouble
                  onPress={HandleMedium}
                  selected={medium}
                  title="regular"
                  colorButton="#FFC77D"
                />
                <ButtonTrouble
                  onPress={HandleEasy}
                  selected={easy}
                  title="fácil"
                  colorButton="#5EFF5A"
                />
              </S.SectionTButtons>
            </S.SectionTrouble>
          </S.ContainerBottom>
        ) : (
          <S.ContainerBottomButton>
            <Button onPress={HandleAnswer} text="mostrar resposta" type="eye" />
          </S.ContainerBottomButton>
        )}
      </S.Scroll>
      <ModalOptions
        type="noSearch"
        open={modal}
        close={() => setModal(!modal)}
        title="Ações"
        action1={() => {
          navigation.navigate("SettingsEditCard");
          setModal(!modal);
        }}
        action2={() => {
          navigation.navigate("SettingsAddCard");
          setModal(!modal);
        }}
        action3={() => {
          setModalRestart(true);
          setModal(!modal);
        }}
        action4={() => {
          setModalDisable(true);
          setModal(!modal);
        }}
        action5={() => {
          setModalDelete(true);
          setModal(!modal);
        }}
      />
      <ModalAlert
        title="Você tem certeza que quer reiniciar a Repetição Espaçada?"
        text="Esta ação não poderá ser desfeita."
        open={modalRestart}
        close={() => setModalRestart(!modalRestart)}
      />
      <ModalAlert
        title="Você tem certeza que quer apagar este card?"
        text="Esta ação não poderá ser desfeita."
        open={modalDelete}
        close={() => setModalDelete(!modalDelete)}
      />
      <ModalAlert
        title="Você tem certeza que quer desativar este card?"
        open={modalDisable}
        close={() => setModalDisable(!modalDisable)}
      />
      <ModalOptions
        open={modalAlert}
        close={() => setModalAlert(!modalAlert)}
        title="Card Criado"
        text="Você criou este card"
      />
      <ModalRevision
        open={modalRevision}
        close={() => {
          setModalRevision(!modalRevision);
          navigation.navigate("QuestionRevision");
        }}
        titleSucess="revisão relâmpago"
        textSucess="Você encerrou esse cíclo!"
        subTextSucess="Revise os cards que você errou para garantir uma melhor fixação."
      />

      <ModalFeedBack
        open={modalFeedBack}
        close={() => setModalFeedBack(!modalFeedBack)}
      />
    </S.Container>
  );
};

export default Question;
