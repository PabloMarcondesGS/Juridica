import React, { useState } from "react";
import * as S from "./Checkbox.styles";
import Checkbox from "expo-checkbox";

interface Props {
  title: string;
}

const CheckboxItem: React.FC<Props> = (props: Props) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <S.Container>
      <Checkbox
        color={isChecked ? "#5EFF5A" : undefined}
        value={isChecked}
        onValueChange={setChecked}
      />
      <S.Title>{props.title}</S.Title>
    </S.Container>
  );
};

export default CheckboxItem;
