import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Progress from "../../components/Progress/Progress";
import { propsStack } from "../../routes/Models";
import * as S from "./Registration.styles";
import Card from "./Components/Card/Card";
import Button from "../../components/Button/Button";
import { Entypo } from "@expo/vector-icons";
import Balance from "../../../assets/balanceIcon.png";
import Building from "../../../assets/building.png";
import Alert from "../../../assets/alert.png";
import ModalBuy from "../../components/Modals/ModalBuy/ModalBuy";

const RegistrationPlans: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<propsStack>();
  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCenter>
          <Progress />
          <S.SectionCard>
            <S.Title>Selecione um plano</S.Title>
            <Card />
            <S.SubTitle>
              Conteúdo completo para seu estudo durante todo o ano.
            </S.SubTitle>
          </S.SectionCard>
          <S.SectionContents>
            <S.Card>
              <Entypo name="check" size={24} color="#5EFF5A" />
              <S.Icon source={Alert} />

              <S.CardSectionTitle>
                <S.CardTitle>
                  Lei Seca e Doutrina{"\n"}
                  <S.SubTitle>Leis e interpretações de juristas</S.SubTitle>
                </S.CardTitle>
              </S.CardSectionTitle>
            </S.Card>
            <S.Card>
              <Entypo name="check" size={24} color="#5EFF5A" />
              <S.Icon source={Building} />

              <S.CardSectionTitle>
                <S.CardTitle>
                  Súmulas{"\n"}
                  <S.SubTitle>
                    Súmulas dos Tribunais Superiores (2018 a 2022)
                  </S.SubTitle>
                </S.CardTitle>
              </S.CardSectionTitle>
            </S.Card>
            <S.Card>
              <Entypo name="check" size={24} color="#5EFF5A" />
              <S.Icon source={Balance} />

              <S.CardSectionTitle>
                <S.CardTitle>
                  Jurisprudência{"\n"}
                  <S.SubTitle>
                    Julgados dos Tribunais Superiores (2018 a 2022)
                  </S.SubTitle>
                </S.CardTitle>
              </S.CardSectionTitle>
            </S.Card>
          </S.SectionContents>
        </S.ContainerCenter>
        <S.ContainerBottom>
          <Button
            text="Comprar"
            type="solid"
            onPress={() => navigation.navigate("RegistrationAccount")}
          />
          <S.Button>
            <Button
              text="experimentar por 30 dias"
              type="outline"
              onPress={() => setModalVisible(true)}
            />
          </S.Button>
          <S.SubTitle>Não pedimos seu cartão de crédito.</S.SubTitle>
        </S.ContainerBottom>
        <ModalBuy
          open={modalVisible}
          close={() => setModalVisible(!modalVisible)}
        />
      </S.Scroll>
    </S.Container>
  );
};

export default RegistrationPlans;
