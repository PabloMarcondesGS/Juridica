import { AntDesign } from "@expo/vector-icons";
import React from "react";
import Header from "../../../components/Header/Header";
import * as S from "./HomeCalendar.styles";
import Button from "./Components/Button/Button";

const HomeCalendar: React.FC = () => {
  return (
    <S.Container>
      <Header title="Calendário" type="simple" />
      <S.Scroll>
        <S.SectionTitle>
          <AntDesign name="calendar" color={"#09CBDA"} size={26} />
          <S.Title>Próximas provas</S.Title>
        </S.SectionTitle>
        <S.SectionButtons>
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
        </S.SectionButtons>
        <S.SectionTitle>
          <AntDesign name="bars" size={24} color="#09CBDA" />
          <S.Title>PROVAS PASSADAS</S.Title>
        </S.SectionTitle>
        <S.SectionButtons>
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
          <Button day="13" month="mar" number="XIII" text="Exame OAB" />
        </S.SectionButtons>
      </S.Scroll>
    </S.Container>
  );
};

export default HomeCalendar;
