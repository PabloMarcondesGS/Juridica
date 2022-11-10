import React, { useState } from "react";
import * as S from "./Activity.styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import ModalAlert from "../../components/Modals/ModalAlert/ModalAlert";
import { StatusBar } from "react-native";
import ModalFeedBack from "../../components/Modals/ModalFeedBack/ModalFeedBack";
import Button from "../../components/Button/Button";
import Alternative from "./Components/Alternative/Alternative";
import ModalOptions from "../../components/Modals/ModalOptions/ModalOptions";
import ModalFilter from "../../components/Modals/ModalFilter/ModalFilter";
import ModalToasty from "../../components/Modals/ModalToasty/ModalToasty";

const Activity: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [modalToasty, setModalToasty] = useState(false);

  const navigation = useNavigation<propsStack>();
  const [modalAlert, setModalAlert] = useState(false);
  const [modalFeedBack, setModalFeedBack] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [alternativeA, setAlternativeA] = useState<string>("");
  const [alternativeB, setAlternativeB] = useState<string>("");
  const [alternativeC, setAlternativeC] = useState<string>("");
  const [alternativeD, setAlternativeD] = useState<string>("");
  const [colorA, setColorA] = useState<string>("");
  const [colorB, setColorB] = useState<string>("");
  const [colorC, setColorC] = useState<string>("");
  const [colorD, setColorD] = useState<string>("");
  const [deepening, setDeepening] = useState(false);

  function HandleAnswer() {
    setColorA("sucess");
    setModalToasty(true);
    setTimeout(() => {
      setModalToasty(false);
    }, 3000);

    alternativeB === "selected" ? setColorB("error") : "";
    alternativeC === "selected" ? setColorC("error") : "";
    alternativeD === "selected" ? setColorD("error") : "";
    alternativeB === "selected" ? setAlternativeB("") : "";
    alternativeC === "selected" ? setAlternativeC("") : "";
    alternativeD === "selected" ? setAlternativeD("") : "";
    alternativeB === "selected" ? setDeepening(true) : "";
    alternativeC === "selected" ? setDeepening(true) : "";
    alternativeD === "selected" ? setDeepening(true) : "";
  }

  function HandleA() {
    setAlternativeA("selected");
    setAlternativeB("");
    setAlternativeC("");
    setAlternativeD("");
  }
  function HandleB() {
    setAlternativeA("");
    setAlternativeB("selected");
    setAlternativeC("");
    setAlternativeD("");
  }
  function HandleC() {
    setAlternativeA("");
    setAlternativeB("");
    setAlternativeC("selected");
    setAlternativeD("");
  }
  function HandleD() {
    setAlternativeA("");
    setAlternativeB("");
    setAlternativeC("");
    setAlternativeD("selected");
  }
  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor={"#131418"} />

      <S.ContainerTop>
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
        <S.SectionTop>
          <S.Sectionvalue>
            <S.ValuePrimary>
              01<S.Value>/120</S.Value>
            </S.ValuePrimary>
            <S.LabelValue>Questões</S.LabelValue>
          </S.Sectionvalue>
          <S.Line />
          <S.Sectionvalue>
            <S.Value>01:35</S.Value>
            <S.LabelValue>Minutos</S.LabelValue>
          </S.Sectionvalue>
        </S.SectionTop>
        <Ionicons
          name="ios-close"
          size={30}
          color="#FF2D2E"
          onPress={() => setModalAlert(true)}
        />
      </S.ContainerTop>
      <S.SectionOptions>
        <S.Options onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={20} color="#09CBDA" />
          <S.TitleOptions>voltar</S.TitleOptions>
        </S.Options>

        <S.Options onPress={() => navigation.navigate("List")}>
          <AntDesign name="bars" size={20} color="#09CBDA" />
          <S.TitleOptions>lista</S.TitleOptions>
        </S.Options>
        <S.Options onPress={() => navigation.navigate("CycleComplete")}>
          <S.TitleOptions>pular</S.TitleOptions>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color="#09CBDA"
          />
        </S.Options>
      </S.SectionOptions>

      <S.Scroll>
        <S.Padding>
          <S.ContainerCentral>
            <S.BorderOne>
              <S.BorderTwo>
                <S.BorderThree>
                  <S.SectionTopActivity>
                    <S.TitleActivity>Ética</S.TitleActivity>
                    <SimpleLineIcons
                      name="options"
                      size={20}
                      color="white"
                      onPress={() => setModal(true)}
                    />
                  </S.SectionTopActivity>
                  <S.TextActivity>
                    O advogado César foi procurado pelo cliente Vinícius, que
                    pretendia sua atuação defendendo-o em processo judicial.
                    Ambos, então, ajustaram certo valor em honorários, por meio
                    de contrato escrito. Na fase de execução do processo, César
                    recebeu pagamentos de importâncias devidas a Vinícius e
                    pretende realizar a compensação com os créditos de que é
                    titular. Com base no caso narrado, assinale a afirmativa
                    correta.
                  </S.TextActivity>
                  <S.Alternative color={colorA}>
                    <Alternative
                      value="A"
                      type={alternativeA}
                      onPress={HandleA}
                    />
                    <S.AlternativeText>
                      É admissível a compensação de créditos apenas na hipótese
                      de o contrato de prestação de serviços a autorizar; se for
                      silente o contrato, é vedada, mesmo diante de autorização
                      posterior pelo cliente.
                    </S.AlternativeText>
                  </S.Alternative>
                  <S.Alternative color={colorB}>
                    <Alternative
                      value="B"
                      type={alternativeB}
                      onPress={HandleB}
                    />

                    <S.AlternativeText>
                      É admissível a compensação de créditos somente se o
                      contrato de prestação de serviços a autorizar; caso
                      silente o contrato, é possível a compensação, se houver
                      autorização especial firmada pelo cliente para esse fim.
                    </S.AlternativeText>
                  </S.Alternative>
                  <S.Alternative color={colorC}>
                    <Alternative
                      value="C"
                      type={alternativeC}
                      onPress={HandleC}
                    />

                    <S.AlternativeText>
                      É admissível a compensação de créditos somente se o
                      contrato de prestação de serviços a autorizar; caso
                      silente o contrato, é possível a compensação, se houver
                      autorização especial firmada pelo cliente para esse fim.
                    </S.AlternativeText>
                  </S.Alternative>
                  <S.Alternative color={colorD}>
                    <Alternative
                      value="D"
                      type={alternativeD}
                      onPress={HandleD}
                    />

                    <S.AlternativeText>
                      É admissível a compensação de créditos somente se o
                      contrato de prestação de serviços a autorizar; caso
                      silente o contrato, é possível a compensação, se houver
                      autorização especial firmada pelo cliente para esse fim.
                    </S.AlternativeText>
                  </S.Alternative>

                  <S.SectionFeedBack onPress={() => setModalFeedBack(true)}>
                    <AntDesign
                      name="questioncircleo"
                      size={20}
                      color="#767676"
                    />
                    <S.TextFeedBack>FEEDBACK</S.TextFeedBack>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={13}
                      color="#767676"
                    />
                  </S.SectionFeedBack>
                  <S.LineHorizontal />
                  <S.SectionButton>
                    {deepening === true ? (
                      <Button
                        onPress={() => navigation.navigate("Deepening")}
                        text="Aprofundamento temático"
                        type="deepening"
                      />
                    ) : (
                      <Button
                        onPress={HandleAnswer}
                        text="mostrar resposta"
                        type="eye"
                      />
                    )}
                  </S.SectionButton>
                </S.BorderThree>
              </S.BorderTwo>
            </S.BorderOne>
          </S.ContainerCentral>
        </S.Padding>
      </S.Scroll>
      <ModalAlert
        title="Você tem certeza que quer finalizer o ciclo?"
        text="Esta ação não poderá ser desfeita."
        open={modalAlert}
        close={() => setModalAlert(!modalAlert)}
        action={() => {
          setModalAlert(!modalAlert);
          navigation.navigate("ResultsComplete");
        }}
      />
      <ModalFeedBack
        open={modalFeedBack}
        close={() => setModalFeedBack(!modalFeedBack)}
      />
      <ModalOptions
        type="moreOptions"
        open={modal}
        close={() => setModal(!modal)}
        title="Mais Opções"
        action1={() => {
          navigation.navigate("AddQuestion");
          setModal(!modal);
        }}
        action2={() => {
          navigation.navigate("SettingsAddCard");
          setModal(!modal);
        }}
        action3={() => {
          setModalFilter(true);
          setModal(!modal);
        }}
        action4={() => {}}
      />
      <ModalFilter
        title="Visualizar Filtros"
        open={modalFilter}
        close={() => setModalFilter(!modalFilter)}
      />
      <ModalToasty
        open={modalToasty}
        close={() => setModalToasty(!modalToasty)}
        sucess
        title="Esse conteúdo foi removido de seus 
        cadernos."
      />
    </S.Container>
  );
};

export default Activity;
