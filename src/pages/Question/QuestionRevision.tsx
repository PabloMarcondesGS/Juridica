import React, { useState } from "react";
import * as S from "./Question.styles";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import ButtonTrouble from "./Components/ButtonTrouble/ButtonTrouble";

const QuestionRevision: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [answer, SetAnswer] = useState("[...]");
  const [showOptions, setShowOptions] = useState(false);
  const [easy, setEasy] = useState("normal");
  const [medium, setMedium] = useState("normal");
  const [hard, setHard] = useState("normal");
  const [err, setErr] = useState("normal");
  const [color, setColor] = useState("#767676");

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
    navigation.navigate("Results");
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
  }
  function HandleErr() {
    setEasy("block");
    setMedium("block");
    setHard("block");
    setErr("selected");
    setColor("#FF2D2E");
  }

  return (
    <S.Container>
      <S.ContainerTop>
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
      </S.ContainerTop>

      <S.Scroll>
        <S.ContainerCentral>
          <S.SectionTextCard>
            <S.SectionTopCard>
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={25}
                color="#5EFF5A"
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
            <S.SectionFeedBack>
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
              <S.TextTrouble>Classifique a dificuldade do card:</S.TextTrouble>
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
    </S.Container>
  );
};

export default QuestionRevision;
