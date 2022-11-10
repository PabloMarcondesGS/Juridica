import React, { useState } from "react";
import { IAccordion } from "./Accordion.interface";
import * as S from "./Accordion.styles";
import { MaterialIcons } from "@expo/vector-icons";
import CardBook from "../Card/Card";
import { content } from "./content";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../../../routes/Models";

const Accordion: React.FC<IAccordion> = ({ value, step, text, ...props }) => {
  const navigation = useNavigation<propsStack>();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Accordion>
      {isOpen === false ? (
        <S.Container {...props}>
          <S.Group onPress={() => setIsOpen(!isOpen)}>
            <S.TextPrincipal>
              <S.Step>{step}.</S.Step>
              {text}
            </S.TextPrincipal>
            <S.Button onPress={() => navigation.navigate("Activity")}>
              <S.TitleButton>resolver questões</S.TitleButton>
            </S.Button>
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
            <S.Button>
              <S.TitleButton>resolver questões</S.TitleButton>
            </S.Button>
          </S.GroupSelected>
          <S.BottomSelected>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="#767676" />
          </S.BottomSelected>
          <S.AccordionItem>
            <S.ScrollHorizontal horizontal={true}>
              {content.map((question) => (
                <CardBook
                  key={question.id}
                  text={question.text}
                  title={question.title}
                />
              ))}
            </S.ScrollHorizontal>
          </S.AccordionItem>
        </S.Container>
      )}
    </S.Accordion>
  );
};

export default Accordion;
