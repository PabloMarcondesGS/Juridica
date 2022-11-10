import React, { useState } from "react";
import * as S from "./List.styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { StatusBar } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input/Input";
import Question from "./Components/Question/Question";
import Accordion from "./Components/Accordion/Accordion";

const Content = [
  {
    id: 1,
    text: "1. No tocante à ausência, é correto afirmar que:",
    type: true,
  },
  {
    id: 2,

    text: "2. No que se refere às pessoas naturais, julgue os itens que se seguem. Aqueles que, independentemente da existência de grau de parentesco, tiverem sobre...",
    type: false,
  },
  {
    id: 3,

    text: "1. No tocante à ausência, é correto afirmar que:",
    type: true,
  },
  {
    id: 4,
    text: "1. No tocante à ausência, é correto afirmar que:",
    type: true,
  },
];

const List: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [handleDiscipline, setHandleDiscipline] = useState(false);
  const [all, setAll] = useState(true);
  const [discipline, setDiscipline] = useState(false);
  const [allMini, setAllMini] = useState(true);
  const [resolved, setResolved] = useState(false);
  const [notResolved, setNotResolved] = useState(false);

  function HandleAll() {
    setAll(true);
    setDiscipline(false);
    setHandleDiscipline(false);
  }

  function HandleDiscipline() {
    setAll(false);
    setDiscipline(true);
    setHandleDiscipline(true);
  }

  function HandleAllMini() {
    setAllMini(true);
    setResolved(false);
    setNotResolved(false);
  }

  function HandleResolved() {
    setAllMini(false);
    setResolved(true);
    setNotResolved(false);
  }

  function HandleNotResolved() {
    setAllMini(false);
    setResolved(false);
    setNotResolved(true);
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
      <S.ScrollNoPadding>
        <S.Padding>
          <S.Sectiontitle>
            <S.TitleIcon>
              <AntDesign name="bars" size={24} color="#09CBDA" />
              <S.Title>Lista</S.Title>
            </S.TitleIcon>

            <Ionicons
              name="close-outline"
              size={38}
              color="#767676"
              onPress={() => navigation.goBack()}
            />
          </S.Sectiontitle>
        </S.Padding>
        <S.SectionButton>
          <S.ButtonQuestionLong
            background={all === true ? "#1F1F23" : "#131418"}
            onPress={HandleAll}
          >
            <S.ButtonTitle color={all === true ? "#FFFFFF" : "#767676"}>
              Todas
            </S.ButtonTitle>
          </S.ButtonQuestionLong>
          <S.ButtonQuestionLong
            background={discipline === true ? "#1F1F23" : "#131418"}
            onPress={HandleDiscipline}
          >
            <S.ButtonTitle color={discipline === true ? "#FFFFFF" : "#767676"}>
              Disciplinas
            </S.ButtonTitle>
          </S.ButtonQuestionLong>
        </S.SectionButton>
        <S.Padding>
          <Input
            label=""
            placeholder="Digite aqui sua pesquisa"
            type="search"
          />
          <S.SectionFilter>
            <S.ButtonFilter
              background={allMini === true ? "#1F1F23" : "#131418"}
              onPress={HandleAllMini}
            >
              <S.FilterTitle color={allMini === true ? "#FFFFFF" : "#767676"}>
                Tudo
              </S.FilterTitle>
            </S.ButtonFilter>
            <S.ButtonFilter
              background={resolved === true ? "#1F1F23" : "#131418"}
              onPress={HandleResolved}
            >
              <S.FilterTitle color={resolved === true ? "#FFFFFF" : "#767676"}>
                Resolvidas
              </S.FilterTitle>
            </S.ButtonFilter>
            <S.ButtonFilter
              background={notResolved === true ? "#1F1F23" : "#131418"}
              onPress={HandleNotResolved}
            >
              <S.FilterTitle
                color={notResolved === true ? "#FFFFFF" : "#767676"}
              >
                Não resolvidas
              </S.FilterTitle>
            </S.ButtonFilter>
          </S.SectionFilter>

          {handleDiscipline === true ? (
            <S.SectionContent>
              <Accordion text="Direito Penal" content={Content} />
              <Accordion text="Direito Civil" content={Content} />
              <Accordion text="Direito Ambiental" content={Content} />
              <Accordion text="Direito Constitucional" content={Content} />
              <Accordion text="Direito Empresarial" content={Content} />
              <Accordion text="Direito Civil" content={Content} />
              <Accordion text="Direito Civil" content={Content} />
            </S.SectionContent>
          ) : (
            <S.SectionContent>
              <Question
                text="1. No tocante à ausência, é correto
afirmar que:"
                discipline="Direitio Civil"
              />
              <Question
                text="2. No que se refere às pessoas naturais,
              julgue os itens que se seguem. Aqueles
              que, independentemente da existência
              de grau de parentesco, tiverem sobre..."
                discipline="Direitio Civil"
                resolved
              />
              <Question
                text="1. No tocante à ausência, é correto
afirmar que:"
                discipline="Direitio Civil"
              />
              <Question
                text="2. No que se refere às pessoas naturais,
              julgue os itens que se seguem. Aqueles
              que, independentemente da existência
              de grau de parentesco, tiverem sobre..."
                discipline="Direitio Civil"
                resolved
              />
              <Question
                text="1. No tocante à ausência, é correto
afirmar que:"
                discipline="Direitio Civil"
              />
              <Question
                text="2. No que se refere às pessoas naturais,
              julgue os itens que se seguem. Aqueles
              que, independentemente da existência
              de grau de parentesco, tiverem sobre..."
                discipline="Direitio Civil"
                resolved
              />
              <Question
                text="1. No tocante à ausência, é correto
afirmar que:"
                discipline="Direitio Civil"
              />
              <Question
                text="2. No que se refere às pessoas naturais,
              julgue os itens que se seguem. Aqueles
              que, independentemente da existência
              de grau de parentesco, tiverem sobre..."
                discipline="Direitio Civil"
                resolved
              />
              <Question
                text="1. No tocante à ausência, é correto
afirmar que:"
                discipline="Direitio Civil"
              />
              <Question
                text="2. No que se refere às pessoas naturais,
              julgue os itens que se seguem. Aqueles
              que, independentemente da existência
              de grau de parentesco, tiverem sobre..."
                discipline="Direitio Civil"
                resolved
              />
            </S.SectionContent>
          )}
        </S.Padding>
      </S.ScrollNoPadding>
    </S.Container>
  );
};

export default List;
