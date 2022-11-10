import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import * as S from "./Settings.styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import Button from "../../components/Button/Button";
import Checkbox from "expo-checkbox";

const SettingsQuestions: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [isChecked, setChecked] = useState(false);
  const [minutes, setMinutes] = useState(15);
  const [low, setLow] = useState("#333336");
  const [medium, setMedium] = useState("#09CBDA");
  const [high, setHigh] = useState("#333336");

  function HandleLow() {
    setLow("#09CBDA");
    setMedium("#333336");
    setHigh("#333336");
  }
  function HandleMedium() {
    setLow("#333336");
    setMedium("#09CBDA");
    setHigh("#333336");
  }
  function HandleHigh() {
    setLow("#333336");
    setMedium("#333336");
    setHigh("#09CBDA");
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
      <S.Scroll>
        <S.Padding>
          <S.Sectiontitle>
            <S.Empty />
            <S.Title>Configurações</S.Title>

            <Ionicons
              name="close-outline"
              size={28}
              color="#767676"
              onPress={() => navigation.goBack()}
              style={{
                marginRight: 20,
              }}
            />
          </S.Sectiontitle>
          <S.SectionInfos>
            <S.InfoTitle>Quantidade diária de cards</S.InfoTitle>
            <S.InfoSubTitle>
              Ajuste o volume diário de cards a{"\n"} serem disponibilizados
              para
              {"\n"}
              revisão.
            </S.InfoSubTitle>
          </S.SectionInfos>
          <S.ContainerOptions>
            {isChecked === true ? (
              <S.SectionOptions>
                <S.ButtonOptions color={"#333336"} />
                <S.ButtonOptions color={"#333336"} />
                <S.ButtonOptions color={"#09CBDA"} />
              </S.SectionOptions>
            ) : (
              <S.SectionOptions>
                <S.ButtonOptions color={low} onPress={HandleLow} />
                <S.ButtonOptions color={medium} onPress={HandleMedium} />
                <S.ButtonOptions color={high} onPress={HandleHigh} />
              </S.SectionOptions>
            )}
            <S.SectionText>
              <S.OptionsText>BAIXA</S.OptionsText>
              <S.OptionsText>MÉDIA</S.OptionsText>
              <S.OptionsText>ALTA</S.OptionsText>
            </S.SectionText>
          </S.ContainerOptions>
          <S.SectionInfos>
            <S.InfoTitle>Duração do ciclo de revisão</S.InfoTitle>
            <S.InfoSubTitle>
              Ajuste o tempo de duração do{"\n"} ciclo de revisão.
            </S.InfoSubTitle>
            <S.CheckBox>
              <Checkbox
                color={isChecked ? "#5EFF5A" : undefined}
                value={isChecked}
                onValueChange={setChecked}
              />
              <S.CheckBoxTitle>Sem tempo pré definido</S.CheckBoxTitle>
            </S.CheckBox>
          </S.SectionInfos>
          {isChecked === true ? (
            <View></View>
          ) : (
            <S.SectionMinutes>
              <AntDesign
                name="minuscircle"
                size={28}
                disabled={minutes === 15 ? true : false}
                onPress={() => setMinutes(minutes - 5)}
                color={minutes === 15 ? "#767676" : "#09CBDA"}
              />
              <S.Minutes>
                <S.Cycle>Ciclo</S.Cycle>
                <S.Value>{minutes}</S.Value>
                <S.Text>Minutos</S.Text>
              </S.Minutes>

              <AntDesign
                name="pluscircle"
                size={28}
                disabled={minutes === 50 ? true : false}
                onPress={() => setMinutes(minutes + 5)}
                color={minutes === 50 ? "#767676" : "#09CBDA"}
              />
            </S.SectionMinutes>
          )}
          <S.SectionInfosMini>
            <S.InfoTitle>Caderno de erros</S.InfoTitle>
            <S.InfoSubTitle>
              Questões erradas serão{"\n"} adicionadas automaticamente no{"\n"}{" "}
              caderno de erros.
            </S.InfoSubTitle>
            <S.CheckBox>
              <Checkbox
                color={isChecked ? "#5EFF5A" : undefined}
                value={isChecked}
                onValueChange={setChecked}
              />
              <S.CheckBoxTitle>Adicionar automaticamente</S.CheckBoxTitle>
            </S.CheckBox>
          </S.SectionInfosMini>
          <S.SectionInfosMini>
            <S.InfoTitle>Notificações</S.InfoTitle>
            <S.InfoSubTitle>
              Notificações serão exibidas ao{"\n"} errar ou adicionar questões
              aos
              {"\n"}
              cadernos.
            </S.InfoSubTitle>
            <S.CheckBox>
              <Checkbox
                color={isChecked ? "#5EFF5A" : undefined}
                value={isChecked}
                onValueChange={setChecked}
              />
              <S.CheckBoxTitle>Mostrar notificações</S.CheckBoxTitle>
            </S.CheckBox>
          </S.SectionInfosMini>
        </S.Padding>
      </S.Scroll>
      <S.ContainerButton>
        <Button text="Salvar alterações" type="solid" />
      </S.ContainerButton>
    </S.Container>
  );
};

export default SettingsQuestions;
