import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { IInput } from "./Input.interface";
import * as S from "./Input.styles";

const Input: React.FC<IInput> = ({ type, label, ...props }) => {
  const [color, setColor] = useState("#767676");

  function HandleFocus() {
    setColor("#09CBDA");
  }
  function HandleBlur() {
    setColor("#767676");
  }

  return (
    <S.ContainerInput>
      {type === "search" ? (
        <S.ContainerSearch color={color}>
          <MaterialIcons name="search" size={20} color="#767676" />
          <S.InputSearch
            {...props}
            placeholderTextColor="#767676"
            onFocus={HandleFocus}
            onBlur={HandleBlur}
          />
        </S.ContainerSearch>
      ) : type === "big" ? (
        <S.ContainerBig color={color}>
          <S.Label>{label}</S.Label>
          <S.Input
            {...props}
            placeholderTextColor="#767676"
            onFocus={HandleFocus}
            onBlur={HandleBlur}
          />
        </S.ContainerBig>
      ) : type === "medium" ? (
        <S.ContainerMedium color={color}>
          <S.Label>{label}</S.Label>
          <S.Input
            {...props}
            placeholderTextColor="#767676"
            onFocus={HandleFocus}
            onBlur={HandleBlur}
          />
        </S.ContainerMedium>
      ) : type === "complete" ? (
        <S.ContainerComplete color="#5EFF5A">
          <S.Label>{label}</S.Label>
          <S.Input
            {...props}
            placeholderTextColor="#767676"
            onFocus={HandleFocus}
            onBlur={HandleBlur}
          />
        </S.ContainerComplete>
      ) : type === "completeSecondary" ? (
        <S.Container color="#5EFF5A">
          <S.Label>{label}</S.Label>
          <S.Input
            {...props}
            placeholderTextColor="#767676"
            onFocus={HandleFocus}
            onBlur={HandleBlur}
          />
        </S.Container>
      ) : (
        <S.Container color={color}>
          <S.Label>{label}</S.Label>
          <S.Input
            {...props}
            placeholderTextColor="#767676"
            onFocus={HandleFocus}
            onBlur={HandleBlur}
          />
        </S.Container>
      )}
    </S.ContainerInput>
  );
};
export default Input;
