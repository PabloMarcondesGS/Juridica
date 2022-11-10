import React, { useState } from "react";
import { IAccordion } from "./Accordion.interface";
import * as S from "./Accordion.styles";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Card from "../../../../Card/Card";

const Accordion: React.FC<IAccordion> = ({ value, step, text, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);

  return (
    <S.Accordion>
      {isOpen === false ? (
        <S.Container {...props}>
          <S.Group onPress={() => setIsOpen(!isOpen)}>
            <S.TextPrincipal>
              <S.Step>{step}.</S.Step>
              {text}
            </S.TextPrincipal>
            <S.SectionValue>
              <S.Value>
                {value}
                <S.Total>/36</S.Total>
              </S.Value>
              <S.Title>ativos</S.Title>
            </S.SectionValue>
          </S.Group>
          <S.Bottom>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#767676"
            />
          </S.Bottom>
        </S.Container>
      ) : (
        <S.Container {...props}>
          <S.GroupSelected onPress={() => setIsOpen(!isOpen)}>
            <S.TextPrincipal>
              <S.Step>{step}.</S.Step>
              {text}
            </S.TextPrincipal>
            <S.SectionValue>
              <S.Value>
                {value}
                <S.Total>/36</S.Total>
              </S.Value>
              <S.Title>ativos</S.Title>
            </S.SectionValue>
          </S.GroupSelected>
          <S.BottomSelected>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="#767676" />
          </S.BottomSelected>
          <S.AccordionItem>
            <S.ScrollHorizontal horizontal={true}>
              <Card ative={isChecked} />
              <Card ative={isChecked} />
              <Card ative={isChecked} />
              <Card ative={isChecked} />
              <Card ative={isChecked} />
            </S.ScrollHorizontal>

            <S.SectionCheckBox>
              <Checkbox
                color={isChecked ? "#5EFF5A" : undefined}
                value={isChecked}
                onValueChange={setChecked}
              />
              <S.TitleCheckBox>Ativar Todos os Cards</S.TitleCheckBox>
            </S.SectionCheckBox>
          </S.AccordionItem>
        </S.Container>
      )}
    </S.Accordion>
  );
};

export default Accordion;
