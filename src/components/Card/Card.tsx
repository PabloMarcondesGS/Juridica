import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from "react";
import * as S from "./Card.styles";

interface Props {
  ative: boolean;
  type?: "primary" | "secondary";
}

const Card: React.FC<Props> = (props: Props) => {
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    props.ative === true ? setChecked(true) : undefined;
  });

  return (
    <S.Container opacity={isChecked === true ? 10 : 0.3}>
      <S.BorderOne>
        <S.BorderTwo>
          {props.type === "secondary" ? (
            <S.BorderThree>
              <S.SectionCheckbox>
                <S.Title>imposto residual</S.Title>
                <Checkbox
                  color={isChecked ? "#5EFF5A" : undefined}
                  value={isChecked}
                  onValueChange={setChecked}
                />
              </S.SectionCheckbox>
              <S.Text>
                Pertencem aos Estados e DF <S.Ellipsis>[...]</S.Ellipsis> do
                valor arrecadado com o imposto residual
              </S.Text>
              <S.SectionBottom>
                {isChecked === true ? (
                  <S.SectionSecondary>
                    <S.TitleSecondary>CARD ATIVADO</S.TitleSecondary>
                  </S.SectionSecondary>
                ) : (
                  <S.SectionSecondary>
                    <S.TitleSecondaryWhite>
                      Card desativado
                    </S.TitleSecondaryWhite>
                  </S.SectionSecondary>
                )}

                <S.Line />
                <S.TextBottom>Direito Tributário</S.TextBottom>
                <S.SubTextBottom>
                  5. Repartição das receitas tributárias
                </S.SubTextBottom>
              </S.SectionBottom>
            </S.BorderThree>
          ) : (
            <S.BorderThree>
              <S.SectionCheckbox>
                <S.Title>imposto residual</S.Title>
                <Checkbox
                  color={isChecked ? "#5EFF5A" : undefined}
                  value={isChecked}
                  onValueChange={setChecked}
                />
              </S.SectionCheckbox>
              <S.Text>
                Pertencem aos Estados e DF <S.Ellipsis>[...]</S.Ellipsis> do
                valor arrecadado com o imposto residual
              </S.Text>
              <S.SectionBottom>
                <S.Line />
                <S.TextBottom>Direito Tributário</S.TextBottom>
                <S.SubTextBottom>
                  5. Repartição das receitas tributárias
                </S.SubTextBottom>
              </S.SectionBottom>
            </S.BorderThree>
          )}
        </S.BorderTwo>
      </S.BorderOne>
    </S.Container>
  );
};

export default Card;
