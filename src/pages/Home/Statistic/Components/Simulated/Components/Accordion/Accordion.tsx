import React, { useState } from "react";
import * as S from "./Accordion.styles";
import { AntDesign } from "@expo/vector-icons";
import Questions from "../Questions/Questions";

type IAccordion = {
  value: number;
  discipline: string;
  date: string;
  month: string;
  questions: string;
};

const content = [
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

const Accordion: React.FC<IAccordion> = ({
  value,
  discipline,
  questions,
  month,
  date,
}) => {
  const [press, setPress] = useState(false);
  const [allMini, setAllMini] = useState(true);
  const [resolved, setResolved] = useState(false);
  const [notResolved, setNotResolved] = useState(false);

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
    <S.Accordion>
      <S.Container
        onPress={() => setPress(!press)}
        color={press ? "#333336" : "#1F1F23"}
      >
        <S.SectionTop>
          <S.SectionTitle>
            <S.GroupText>
              <S.Date>{date}</S.Date>
              <S.Month>{month}</S.Month>
            </S.GroupText>
            <S.GroupText>
              <S.Questions>{questions}</S.Questions>
              <S.Discipline>{discipline}</S.Discipline>
            </S.GroupText>
          </S.SectionTitle>
          <S.GraphCircle
            color={
              value > 60 ? "#5EFF5A" : value === 50 ? "#FFC77D" : "#FF2D2E"
            }
          >
            <S.Value>
              {value}
              <S.Percentage>{"\n"}%</S.Percentage>
            </S.Value>
          </S.GraphCircle>
        </S.SectionTop>
        <S.Line />
        <S.Arrow>
          {press ? (
            <AntDesign name="up" size={20} color="#767676" />
          ) : (
            <AntDesign name="down" size={20} color="#767676" />
          )}
        </S.Arrow>
      </S.Container>
      {press && (
        <S.Container
          onPress={() => setPress(!press)}
          color={press ? "#333336" : "#1F1F23"}
        >
          <S.Padding>
            <S.SectionFilter>
              <S.ButtonFilter
                background={allMini === true ? "#1F1F23" : "#333336"}
                onPress={HandleAllMini}
              >
                <S.FilterTitle color={allMini === true ? "#FFFFFF" : "#767676"}>
                  Tudo
                </S.FilterTitle>
              </S.ButtonFilter>
              <S.ButtonFilter
                background={resolved === true ? "#1F1F23" : "#333336"}
                onPress={HandleResolved}
              >
                <S.FilterTitle
                  color={resolved === true ? "#FFFFFF" : "#767676"}
                >
                  Resolvidas
                </S.FilterTitle>
              </S.ButtonFilter>
              <S.ButtonFilter
                background={notResolved === true ? "#1F1F23" : "#333336"}
                onPress={HandleNotResolved}
              >
                <S.FilterTitle
                  color={notResolved === true ? "#FFFFFF" : "#767676"}
                >
                  Não resolvidas
                </S.FilterTitle>
              </S.ButtonFilter>
            </S.SectionFilter>
          </S.Padding>

          <S.SectionQuestions>
            <Questions text="Direito Penal" content={content} />
            <Questions text="Direito Civil" content={content} />
            <Questions text="Direito Ambiental" content={content} />
            <Questions text="Direito Constitucional" content={content} />
            <Questions text="Direito Empresarial" content={content} />
            <Questions text="Direito Civil" content={content} />
            <Questions text="Direito Civil" content={content} />
          </S.SectionQuestions>
        </S.Container>
      )}
    </S.Accordion>
  );
};

export default Accordion;
