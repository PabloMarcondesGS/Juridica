import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { IAlternative } from "./Alternative.interface";
import * as S from "./Alternative.styles";

const Alternative: React.FC<IAlternative> = ({ value, type, ...props }) => {
  return (
    <S.Container>
      {type === "error" ? (
        <S.AlternativeButtonError {...props}>
          <AntDesign name="close" size={16} color="black" />
        </S.AlternativeButtonError>
      ) : type === "selected" ? (
        <S.AlternativeButtonSelected {...props}>
          <Entypo name="check" size={16} color="black" />
        </S.AlternativeButtonSelected>
      ) : (
        <S.AlternativeButton {...props}>
          <S.AlternativeValue>{value}</S.AlternativeValue>
        </S.AlternativeButton>
      )}
    </S.Container>
  );
};

export default Alternative;
