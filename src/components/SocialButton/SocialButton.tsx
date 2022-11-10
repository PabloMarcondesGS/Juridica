import React from "react";
import { IButton } from "./SocialButton.interface";
import * as S from "./SocialButton.styles";
import { FontAwesome5 } from "@expo/vector-icons";
import Google from "../../../assets/logoGoogle.png";

const SocialButton: React.FC<IButton> = ({ type, ...props }) => {
  return (
    <S.Button>
      {type == "facebook" ? (
        <S.Container {...props}>
          <FontAwesome5 name="facebook" size={24} color="white" />
          <S.Title>Login com Facebook</S.Title>
        </S.Container>
      ) : (
        <S.ContainerGoogle {...props}>
          <S.Google source={Google} />
          <S.TitleGoogle>Login com Google</S.TitleGoogle>
        </S.ContainerGoogle>
      )}
    </S.Button>
  );
};

export default SocialButton;
