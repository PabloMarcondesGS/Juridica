import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const AlternativeValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const AlternativeButton = styled.TouchableOpacity`
  width: 21px;
  height: 21px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.subtitle};
  align-items: center;
  justify-content: center;
`;

export const AlternativeButtonError = styled.TouchableOpacity`
  width: 21px;
  height: 21px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.warning};
  align-items: center;
  justify-content: center;
`;

export const AlternativeButtonSelected = styled.TouchableOpacity`
  width: 21px;
  height: 21px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.sucess};
  align-items: center;
  justify-content: center;
`;
