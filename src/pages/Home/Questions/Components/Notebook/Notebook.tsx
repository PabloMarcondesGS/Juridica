import React from "react";
import * as S from "./Notebook.styles";
import { AntDesign } from "@expo/vector-icons";
import Book from "../../../../../components/Book/Book";
import Accordion from "./Components/Accordion/Accordion";
import { content } from "./content";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../../../routes/Models";

const Notebook: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.SectionTitle>
        <AntDesign name="bars" size={24} color="#09CBDA" />
        <S.Title>Meus cadernos</S.Title>
      </S.SectionTitle>
      <S.SectionAccordion>
        <S.Padding>
          <Book
            type="create"
            text="Criar Novo Caderno"
            onPress={() => navigation.navigate("CreateNotebook")}
          />
        </S.Padding>
        <Accordion
          questions={content}
          total={82}
          value={32}
          card={<Book disabled type="new" text="Novas Questões" newValue={2} />}
        />
        <Accordion
          questions={content}
          total={82}
          value={32}
          cardType
          card={
            <Book disabled type="error" text="Caderno de Erros" newValue={12} />
          }
        />
        <Accordion
          questions={content}
          card={<Book disabled type="normal" text="Direito Tributário" />}
        />
      </S.SectionAccordion>
    </S.Container>
  );
};

export default Notebook;
