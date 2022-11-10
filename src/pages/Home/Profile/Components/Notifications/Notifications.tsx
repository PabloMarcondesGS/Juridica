import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar, Switch } from "react-native";

import * as S from "./Notifications.styles";
interface Props {
  action: () => void;
}

const Notifications: React.FC<Props> = (props: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const toggleSwitchTwo = () =>
    setIsEnabledTwo((previousState) => !previousState);
  const [isEnabledThree, setIsEnabledThree] = useState(false);
  const toggleSwitchThree = () =>
    setIsEnabledThree((previousState) => !previousState);
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
            <S.TitleHeader>notificações</S.TitleHeader>
            <S.Empty />
          </S.ContainerHeader>
          <S.SectionTitle>
            <S.Title>Preferências de Notificações</S.Title>
            <S.SubTitle>Configure quando ser notificado pelo app.</S.SubTitle>
          </S.SectionTitle>
          <S.SectionSettings>
            <S.TitleSettings>Ativar notificações?</S.TitleSettings>
            <Switch
              trackColor={{ false: "#767676", true: "#5EFF5A" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#767676"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </S.SectionSettings>
          <S.Line />
          <S.SectionSettings>
            <S.TitleSettings>Lembretes de Estudo</S.TitleSettings>
            <Switch
              trackColor={{ false: "#767676", true: "#5EFF5A" }}
              thumbColor={isEnabledTwo ? "#f4f3f4" : "#767676"}
              onValueChange={toggleSwitchTwo}
              value={isEnabledTwo}
            />
          </S.SectionSettings>
          <S.SectionSettings>
            <S.TitleSettings>Notificações de Estatísticas</S.TitleSettings>
            <Switch
              trackColor={{ false: "#767676", true: "#5EFF5A" }}
              thumbColor={isEnabledThree ? "#f4f3f4" : "#767676"}
              onValueChange={toggleSwitchThree}
              value={isEnabledThree}
            />
          </S.SectionSettings>
        </S.ContainerCentral>
      </S.Scroll>
    </S.Container>
  );
};

export default Notifications;
