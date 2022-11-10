import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar, Switch } from "react-native";
import People from "../../../../../../assets/userIcon.png";

import * as S from "./Profile.styles";
interface Props {
  action: () => void;
}

const Profile: React.FC<Props> = (props: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const toggleSwitchTwo = () =>
    setIsEnabledTwo((previousState) => !previousState);

  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCentral>
          <S.ContainerHeader>
            <StatusBar barStyle="light-content" backgroundColor={"#131418"} />

            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="white"
              onPress={props.action}
            />
            <S.TitleHeader>perfil</S.TitleHeader>
            <S.Empty />
          </S.ContainerHeader>
          <S.SectionTitle>
            <S.Title>Edite seu perfil</S.Title>
            <S.SubTitle>
              Aqui você configura todas as questões de conta
            </S.SubTitle>
          </S.SectionTitle>
          <S.SectionImage>
            <S.Profile source={People} imageStyle={{ borderRadius: 112 }}>
              <S.Title>+</S.Title>
            </S.Profile>
          </S.SectionImage>

          <S.SectionSettings>
            <S.TitleSettings>Já passei em um concurso</S.TitleSettings>
            <Switch
              trackColor={{ false: "#767676", true: "#5EFF5A" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#767676"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </S.SectionSettings>
          <S.SectionSettings>
            <S.TitleSettings>Já estudo a mais de um ano</S.TitleSettings>
            <Switch
              trackColor={{ false: "#767676", true: "#5EFF5A" }}
              thumbColor={isEnabledTwo ? "#f4f3f4" : "#767676"}
              onValueChange={toggleSwitchTwo}
              value={isEnabledTwo}
            />
          </S.SectionSettings>
          <S.SectionTitle>
            <S.Title>Light Mode</S.Title>
            <S.SubTitle>Aqui você configura o tema do aplicativo</S.SubTitle>
          </S.SectionTitle>
          <S.SectionLight>
            <S.SunBorder>
              <Feather name="sun" size={24} color="#09CBDA" />
            </S.SunBorder>
            <S.TitleSettings>Ligar Luzes</S.TitleSettings>
          </S.SectionLight>
        </S.ContainerCentral>
      </S.Scroll>
    </S.Container>
  );
};

export default Profile;
