import React, { useState } from "react";
import * as S from "./Accordion.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { IAccordion } from "./Accordion.interface";
import Content from "./Components/Content/Content";

type IInfo = {
  id: number;
  text: string;
  type: boolean;
};

const Accordion: React.FC<IAccordion> = ({ text, content }) => {
  const [press, setPress] = useState(false);

  return (
    <S.Accordion color={press === true ? " #333336" : "#1F1F23"}>
      <S.Container onPress={() => setPress(!press)}>
        <S.TextPrincipal>{text}</S.TextPrincipal>
        {press === true ? (
          <MaterialIcons name="keyboard-arrow-up" size={24} color="#767676" />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#767676" />
        )}
      </S.Container>
      {press && (
        <S.SectionContent>
          {content.map((info: IInfo) => (
            <Content key={info.id} text={info.text} type={info.type} />
          ))}
        </S.SectionContent>
      )}
    </S.Accordion>
  );
};

export default Accordion;
