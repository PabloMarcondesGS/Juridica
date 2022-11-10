import React from "react";
import Accordion from "./Components/Accordion/Accordion";
import * as S from "./Simulated.styles";

const Simulated: React.FC = () => {
  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>2022</S.Title>
      </S.SectionTitle>
      <Accordion
        month="set"
        date="04"
        questions="37 Questões"
        discipline="Penal"
        value={75}
      />
      <Accordion
        month="set"
        date="04"
        questions="37 Questões"
        discipline="Penal"
        value={50}
      />
      <Accordion
        month="set"
        date="04"
        questions="37 Questões"
        discipline="Penal"
        value={24}
      />
      <Accordion
        month="set"
        date="04"
        questions="37 Questões"
        discipline="Penal"
        value={75}
      />
    </S.Container>
  );
};

export default Simulated;
