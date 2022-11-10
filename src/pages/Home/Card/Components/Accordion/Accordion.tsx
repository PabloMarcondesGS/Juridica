import React from "react";
import { IAccordion } from "./Accordion.interface";
import * as S from "./Accordion.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const Accordion: React.FC<IAccordion> = ({ text, type, ...props }) => {
  return (
    <S.Accordion>
      {type === false ? (
        <S.Container color="#09CBDA" {...props}>
          <S.Group>
            <MaterialCommunityIcons
              name="alert-rhombus-outline"
              size={30}
              color="white"
            />
            <S.TextPrincipal>{text}</S.TextPrincipal>
          </S.Group>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#767676" />
        </S.Container>
      ) : type === "item" ? (
        <S.Container color="#09CBDA" {...props}>
          <S.Group>
            <MaterialCommunityIcons
              name="alert-rhombus-outline"
              size={25}
              color="white"
            />
            <S.TextItem>{text}</S.TextItem>
          </S.Group>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#767676"
          />
        </S.Container>
      ) : type === true ? (
        <S.ContainerSelected color="#09CBDA" {...props}>
          <S.Group>
            <MaterialCommunityIcons
              name="alert-rhombus-outline"
              size={30}
              color="white"
            />
            <S.TextPrincipal>{text}</S.TextPrincipal>
          </S.Group>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#767676" />
        </S.ContainerSelected>
      ) : type === "end" ? (
        <S.Container color="#F80801" {...props}>
          <S.Group>
            <Ionicons name="ios-hourglass-outline" size={24} color="white" />
            <S.TextItem>{text}</S.TextItem>
          </S.Group>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#767676"
          />
        </S.Container>
      ) : (
        <View></View>
      )}
    </S.Accordion>
  );
};

export default Accordion;
