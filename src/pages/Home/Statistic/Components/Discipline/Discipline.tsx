import React, { useState } from "react";
import Accordion from "./Components/Accordion/Accordion";
import * as S from "./Discipline.styles";

const Discipline: React.FC = () => {
  const [today, setToday] = useState(true);
  const [oneWeek, setOneWeek] = useState(false);
  const [oneMonth, setOneMonth] = useState(false);
  const [ever, setEver] = useState(false);

  function HandleToday() {
    setToday(true);
    setOneWeek(false);
    setOneMonth(false);
  }

  function HandleOneWeek() {
    setToday(false);
    setOneWeek(true);
    setOneMonth(false);
  }

  function HandleOneMonth() {
    setToday(false);
    setOneWeek(false);
    setOneMonth(true);
  }

  function HandleEver() {
    setToday(false);
    setOneWeek(false);
    setOneMonth(false);
    setEver(true);
  }

  return (
    <S.Container>
      <S.Padding>
        <S.SectionFilter>
          <S.ButtonFilter
            background={today === true ? "#323236" : "#131418"}
            onPress={HandleToday}
          >
            <S.FilterTitle color={today === true ? "#FFFFFF" : "#767676"}>
              Hoje
            </S.FilterTitle>
          </S.ButtonFilter>
          <S.ButtonFilter
            background={oneWeek === true ? "#323236" : "#131418"}
            onPress={HandleOneWeek}
          >
            <S.FilterTitle color={oneWeek === true ? "#FFFFFF" : "#767676"}>
              7 Dias
            </S.FilterTitle>
          </S.ButtonFilter>
          <S.ButtonFilter
            background={oneMonth === true ? "#323236" : "#131418"}
            onPress={HandleOneMonth}
          >
            <S.FilterTitle color={oneMonth === true ? "#FFFFFF" : "#767676"}>
              30 Dias
            </S.FilterTitle>
          </S.ButtonFilter>

          <S.ButtonFilter
            background={ever === true ? "#323236" : "#131418"}
            onPress={HandleEver}
          >
            <S.FilterTitle color={ever === true ? "#FFFFFF" : "#767676"}>
              Sempre
            </S.FilterTitle>
          </S.ButtonFilter>
        </S.SectionFilter>
      </S.Padding>
      <Accordion value={80} discipline="Direito Tributário" />
      <Accordion value={20} discipline="Direito Penal" />

      <Accordion value={50} discipline="Direito Tributário" />

      <Accordion value={80} discipline="Direito Tributário" />

      <Accordion value={80} discipline="Direito Tributário" />
    </S.Container>
  );
};

export default Discipline;
