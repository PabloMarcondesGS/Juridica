import React from "react";
import { StatusBar, View } from "react-native";
import * as S from "./Header.styles";
import MiniLogo from "../../../assets/miniLogo.png";
import { Ionicons } from "@expo/vector-icons";
import { IHeader } from "./Header.interface";

const Header: React.FC<IHeader> = ({ action, title, type }) => {
  return (
    <S.Container>
      {type === "simple" ? (
        <S.Container>
          <StatusBar barStyle="light-content" backgroundColor={"#1F1F23"} />
          <S.Logo source={MiniLogo} />
          <S.Title>{title}</S.Title>
          <S.Empty />
        </S.Container>
      ) : (
        <S.Container>
          <StatusBar barStyle="light-content" backgroundColor={"#1F1F23"} />
          <S.Logo source={MiniLogo} />
          <S.Title>{title}</S.Title>
          <Ionicons
            name="settings-outline"
            size={24}
            color="white"
            onPress={action}
          />
        </S.Container>
      )}
    </S.Container>
  );
};

export default Header;
