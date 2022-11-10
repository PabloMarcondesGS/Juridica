import React from "react";
import * as S from "./Pagination.styles";
import { AntDesign } from "@expo/vector-icons";

type IPagination = {
  current: number;
  total: number;
  back: () => void;
  next: () => void;
};

const Pagination: React.FC<IPagination> = ({ total, current, next, back }) => {
  return (
    <S.Container>
      <AntDesign name="left" size={22} color="white" onPress={back} />
      <S.Value>
        {current}/{total}
      </S.Value>
      <AntDesign name="right" size={22} color="white" onPress={next} />
    </S.Container>
  );
};

export default Pagination;
