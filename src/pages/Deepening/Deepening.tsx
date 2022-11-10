import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import * as S from "./Deepening.styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../..//routes/Models";
import CardComent from "./Components/CardComponent/CardComent";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import ModalSucess from "../../components/Modals/ModalSucess/ModalSucess";

const Deepening: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  const [modal, setModal] = useState(false);
  const [coment, setComent] = useState("#1F1F23");
  const [comentColor, setComentColor] = useState("white");
  const [card, setCard] = useState("#131418");
  const [cardColor, setCardColor] = useState("#767676");
  const [selectedCard, setSelectedCard] = useState(false);
  const [isChecked, setChecked] = useState(false);

  function handleComent() {
    setComent("#1F1F23");
    setComentColor("white");
    setCard("#131418");
    setCardColor("#767676");
    setSelectedCard(false);
  }

  function handleCard() {
    setComent("#131418");
    setComentColor("#767676");
    setCard("#1F1F23");
    setCardColor("white");
    setSelectedCard(true);
  }
  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
      <S.Scroll>
        <S.Padding>
          <S.SectionTitle>
            <S.Title>Aprofundamento Temático</S.Title>
            <Ionicons
              name="ios-close"
              size={24}
              color="#767676"
              onPress={() => navigation.goBack()}
            />
          </S.SectionTitle>
          <S.SectionButton>
            <S.ButtonQuestion background={coment} onPress={handleComent}>
              <S.ButtonTitle color={comentColor}>Comentários</S.ButtonTitle>
            </S.ButtonQuestion>
            <S.ButtonQuestion background={card} onPress={handleCard}>
              <S.ButtonTitle color={cardColor}>
                Cards relacionados
              </S.ButtonTitle>
            </S.ButtonQuestion>
          </S.SectionButton>
          {selectedCard === true ? (
            <S.ContainerCard>
              <S.SectionCard horizontal={true}>
                <Card ative={isChecked} type="secondary" />
                <Card ative={isChecked} type="secondary" />
                <Card ative={isChecked} type="secondary" />
                <Card ative={isChecked} type="secondary" />
                <Card ative={isChecked} type="secondary" />
              </S.SectionCard>
              <Button
                text="ativar reviões"
                type="solid"
                onPress={() => setModal(true)}
              />
            </S.ContainerCard>
          ) : (
            <S.SectionComent>
              <CardComent
                title="Lei seca"
                text="Art. 145. Há suspeição do juiz:

I – amigo íntimo ou inimigo de qualquer das partes ou de seus advogados;
II – que receber presentes de pessoas que tiverem interesse na causa antes ou depois de iniciado o processo, que aconselhar alguma das partes acerca do objeto da causa ou que subministrar meios para atender às despesas do litígio;
III – quando qualquer das partes for sua credora ou devedora, de seu cônjuge ou companheiro ou de parentes destes, em linha reta até o terceiro grau, inclusive;
IV – interessado no julgamento do processo em favor de qualquer das partes.
§ 1º Poderá o juiz declarar-se suspeito por motivo de foro íntimo, sem necessidade de declarar suas razões.
§ 2º Será ilegítima a alegação de suspeição quando:
I – houver sido provocada por quem a alega;
II – a parte que a alega houver praticado ato que signifique manifesta aceitação do arguido.”"
              />
              <CardComent
                title="Lei seca"
                text="Art. 145. Há suspeição do juiz:

I – amigo íntimo ou inimigo de qualquer das partes ou de seus advogados;
II – que receber presentes de pessoas que tiverem interesse na causa antes ou depois de iniciado o processo, que aconselhar alguma das partes acerca do objeto da causa ou que subministrar meios para atender às despesas do litígio;
III – quando qualquer das partes for sua credora ou devedora, de seu cônjuge ou companheiro ou de parentes destes, em linha reta até o terceiro grau, inclusive;
IV – interessado no julgamento do processo em favor de qualquer das partes.
§ 1º Poderá o juiz declarar-se suspeito por motivo de foro íntimo, sem necessidade de declarar suas razões.
§ 2º Será ilegítima a alegação de suspeição quando:
I – houver sido provocada por quem a alega;
II – a parte que a alega houver praticado ato que signifique manifesta aceitação do arguido.”"
              />
              <CardComent
                title="Lei seca"
                text="Art. 145. Há suspeição do juiz:

I – amigo íntimo ou inimigo de qualquer das partes ou de seus advogados;
II – que receber presentes de pessoas que tiverem interesse na causa antes ou depois de iniciado o processo, que aconselhar alguma das partes acerca do objeto da causa ou que subministrar meios para atender às despesas do litígio;
III – quando qualquer das partes for sua credora ou devedora, de seu cônjuge ou companheiro ou de parentes destes, em linha reta até o terceiro grau, inclusive;
IV – interessado no julgamento do processo em favor de qualquer das partes.
§ 1º Poderá o juiz declarar-se suspeito por motivo de foro íntimo, sem necessidade de declarar suas razões.
§ 2º Será ilegítima a alegação de suspeição quando:
I – houver sido provocada por quem a alega;
II – a parte que a alega houver praticado ato que signifique manifesta aceitação do arguido.”"
              />
              <CardComent
                title="Lei seca"
                text="Art. 145. Há suspeição do juiz:

I – amigo íntimo ou inimigo de qualquer das partes ou de seus advogados;
II – que receber presentes de pessoas que tiverem interesse na causa antes ou depois de iniciado o processo, que aconselhar alguma das partes acerca do objeto da causa ou que subministrar meios para atender às despesas do litígio;
III – quando qualquer das partes for sua credora ou devedora, de seu cônjuge ou companheiro ou de parentes destes, em linha reta até o terceiro grau, inclusive;
IV – interessado no julgamento do processo em favor de qualquer das partes.
§ 1º Poderá o juiz declarar-se suspeito por motivo de foro íntimo, sem necessidade de declarar suas razões.
§ 2º Será ilegítima a alegação de suspeição quando:
I – houver sido provocada por quem a alega;
II – a parte que a alega houver praticado ato que signifique manifesta aceitação do arguido.”"
              />
            </S.SectionComent>
          )}
        </S.Padding>
      </S.Scroll>
      <ModalSucess
        textSucess="Revisão ativada"
        subTextSucess="Esse conteúdo foi incluido em sua pasta de novos cards!"
        open={modal}
        close={() => setModal(!modal)}
        type="noButton"
      />
    </S.Container>
  );
};

export default Deepening;
