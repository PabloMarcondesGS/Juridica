import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-left: 13px;
`;
