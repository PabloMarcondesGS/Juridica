import React, { useState } from "react";
import * as S from "./HomeProfile.styles";
import People from "../../../../assets/userIcon.png";
import Logo from "../../../../assets/bigLogo.png";

import { StatusBar, View } from "react-native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import MyAccount from "./Components/MyAccount/MyAccount";
import Notifications from "./Components/Notifications/Notifications";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Profile from "./Components/Profile/Profile";

const HomeProfile: React.FC = () => {
  const [navigation, setNavigation] = useState("Home");

  return (
    <S.Container>
      {navigation === "Home" ? (
        <S.Container>
          <S.ContainerHeader onPress={() => setNavigation("Profile")}>
            <StatusBar barStyle="light-content" backgroundColor={"#1F1F23"} />
            <S.Profile source={People} />
            <S.SectionTitle>
              <S.Title>Vitor Belluco</S.Title>
              <S.Since>Membro desde: Mai/2022</S.Since>
            </S.SectionTitle>
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </S.ContainerHeader>
          <S.Scroll>
            <S.SectionButton>
              <S.Button onPress={() => setNavigation("MyAccount")}>
                <SimpleLineIcons name="settings" size={24} color="white" />
                <S.TextButton>Minha Conta</S.TextButton>
              </S.Button>
              <S.Button onPress={() => setNavigation("Notifications")}>
                <Ionicons
                  name="ios-notifications-outline"
                  size={24}
                  color="white"
                />
                <S.TextButton>Notificações</S.TextButton>
              </S.Button>
              <S.Button onPress={() => setNavigation("About")}>
                <AntDesign name="questioncircleo" size={24} color="white" />
                <S.TextButton>Sobre</S.TextButton>
              </S.Button>
              <S.Button onPress={() => setNavigation("Contact")}>
                <FontAwesome name="hand-stop-o" size={24} color="white" />
                <S.TextButton>Fale Conosco</S.TextButton>
              </S.Button>
            </S.SectionButton>
            <S.SectionLogo>
              <S.Logo source={Logo} />
              <S.Text>
                Todos os direitos reservados a Jurídika 2022 Copyright
              </S.Text>
            </S.SectionLogo>
          </S.Scroll>
        </S.Container>
      ) : navigation === "MyAccount" ? (
        <S.Container>
          <MyAccount action={() => setNavigation("Home")} />
        </S.Container>
      ) : navigation === "Notifications" ? (
        <S.Container>
          <Notifications action={() => setNavigation("Home")} />
        </S.Container>
      ) : navigation === "About" ? (
        <S.Container>
          <About action={() => setNavigation("Home")} />
        </S.Container>
      ) : navigation === "Contact" ? (
        <S.Container>
          <Contact action={() => setNavigation("Home")} />
        </S.Container>
      ) : navigation === "Profile" ? (
        <S.Container>
          <Profile action={() => setNavigation("Home")} />
        </S.Container>
      ) : (
        <View></View>
      )}
    </S.Container>
  );
};

export default HomeProfile;
