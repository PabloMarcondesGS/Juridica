import { Entypo, Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Progress from "../../components/Progress/Progress";
import { propsStack } from "../../routes/Models";
import * as S from "./Registration.styles";
import IconCard from "../../../assets/iconCard.png";
import Input from "../../components/Input/Input";
import { Keyboard, View } from "react-native";

const RegistrationCard: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [showKeyboard, setShowKeyboard] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => setShowKeyboard(true);
  const _keyboardDidHide = () => setShowKeyboard(false);

  return (
    <S.Container>
      <S.ContainerCenter>
        <Progress />

        <S.CardSectionTitle>
          <Feather
            name="chevron-left"
            size={30}
            color="#767676"
            onPress={() => navigation.goBack()}
          />
          {showKeyboard === true ? (
            <View></View>
          ) : (
            <View>
              <S.Title>Cadastre uma forma de pagamento</S.Title>
              <S.SubTitleMedium>
                Para continuar, crie uma conta
              </S.SubTitleMedium>
            </View>
          )}
        </S.CardSectionTitle>
        <S.CreditCard>
          <S.SectionTitle>
            <S.CreditCardText>Nome do cartão</S.CreditCardText>
            <S.CreditCardText>1234 5678 9012 3456</S.CreditCardText>
          </S.SectionTitle>
          <S.Icon source={IconCard} />
        </S.CreditCard>
      </S.ContainerCenter>
      <S.ContainerInput>
        <S.Input>
          <Input
            label="número do cartão"
            placeholder="Ex: 0123 4567 8901 2345"
          />
        </S.Input>
        <S.Input>
          <Input
            label="nome do cartão"
            placeholder="Exatamente como escrito no cartão"
          />
        </S.Input>
        <S.SectionInputMini>
          <S.InputMini>
            <Input label="cvv" placeholder="Ex: 123" />
          </S.InputMini>
          <S.InputMini>
            <Input label="Validade" placeholder="Ex: 01/02" />
          </S.InputMini>
        </S.SectionInputMini>
      </S.ContainerInput>
      {showKeyboard === true ? (
        <View></View>
      ) : (
        <S.ContainerBack>
          <S.SectionTitleBottom>
            <S.TitleBottom>
              Não haverão cobranças agora. A{"\n"} primeira cobrança acontecerá
              em
              {"\n"}
              <S.TitleColorBottom> 10/12/2021</S.TitleColorBottom> e será de
              <S.TitleColorBottom> R$ 29,90</S.TitleColorBottom>
            </S.TitleBottom>
          </S.SectionTitleBottom>
          <S.Next onPress={() => navigation.navigate("Loading")}>
            <Entypo name="chevron-right" size={30} color="black" />
          </S.Next>
        </S.ContainerBack>
      )}
    </S.Container>
  );
};

export default RegistrationCard;
