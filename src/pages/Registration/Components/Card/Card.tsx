import React, { useState } from "react";
import * as S from "./Card.styles";
import IconBalance from "../../../../../assets/balance.png";
import IconHourglass from "../../../../../assets/hourglass.png";
import { View } from "react-native";

const Card: React.FC = () => {
  const [primaryMonth, setPrimaryMonth] = useState(false);
  const [primaryYear, setPrimaryYear] = useState(false);
  const [secondaryMonth, setSecondaryMonth] = useState(false);
  const [secondaryYear, setSecondaryYear] = useState(false);

  function handlePrimaryMonth() {
    setPrimaryMonth(!primaryMonth);
    setPrimaryYear(false);
    setSecondaryMonth(false);
    setSecondaryYear(false);
  }
  function handlePrimaryYear() {
    setPrimaryMonth(false);
    setPrimaryYear(!primaryYear);
    setSecondaryMonth(false);
    setSecondaryYear(false);
  }
  function handleSecondaryMonth() {
    setPrimaryMonth(false);
    setPrimaryYear(false);
    setSecondaryMonth(!secondaryMonth);
    setSecondaryYear(false);
  }
  function handleSecondaryYear() {
    setPrimaryMonth(false);
    setPrimaryYear(false);
    setSecondaryMonth(false);
    setSecondaryYear(!secondaryYear);
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.ContainerTitle>
          <S.Background>
            <S.Image source={IconBalance} />
          </S.Background>
          <S.Title>Trilha Completa</S.Title>
        </S.ContainerTitle>
        <S.ContainerMonth>
          <S.RadioButton onPress={handlePrimaryMonth}>
            {primaryMonth === true ? <S.Selected /> : <View />}
          </S.RadioButton>
          <S.SectionInfo>
            <S.Info>MENSAL</S.Info>
            <S.Coin>
              R$<S.Value> 87,00 </S.Value>/mês
            </S.Coin>
            <S.SubInfo>Cancele quando quiser sem multa</S.SubInfo>
          </S.SectionInfo>
        </S.ContainerMonth>
        <S.ContainerYear>
          <S.RadioButton onPress={handlePrimaryYear}>
            {primaryYear === true ? <S.Selected /> : <View />}
          </S.RadioButton>
          <S.SectionInfo>
            <S.Info>ANUAL</S.Info>
            <S.Coin>
              R$<S.Value> 77,00 </S.Value>/mês
            </S.Coin>
            <S.SubInfo>Cancele quando quiser sem multa</S.SubInfo>
          </S.SectionInfo>
        </S.ContainerYear>
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.ContainerTitleSecondary>
          <S.Background>
            <S.Image source={IconHourglass} />
          </S.Background>
          <S.Title>Reta FInal</S.Title>
        </S.ContainerTitleSecondary>
        <S.ContainerMonhSecondary>
          <S.RadioButton onPress={handleSecondaryMonth}>
            {secondaryMonth === true ? <S.Selected /> : <View />}
          </S.RadioButton>
          <S.SectionInfo>
            <S.Info>MENSAL</S.Info>
            <S.Coin>
              R$<S.Value> 47,00 </S.Value>/mês
            </S.Coin>
            <S.SubInfo>Cancele quando quiser sem multa</S.SubInfo>
          </S.SectionInfo>
        </S.ContainerMonhSecondary>
        <S.ContainerYearSecondary>
          <S.RadioButton onPress={handleSecondaryYear}>
            {secondaryYear === true ? <S.Selected /> : <View />}
          </S.RadioButton>
          <S.SectionInfo>
            <S.Info>ANUAL</S.Info>
            <S.Coin>
              R$<S.Value> 37,00 </S.Value>/mês
            </S.Coin>
            <S.SubInfo>Cancele quando quiser sem multa</S.SubInfo>
          </S.SectionInfo>
        </S.ContainerYearSecondary>
      </S.ContainerRight>
    </S.Container>
  );
};

export default Card;
