import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  padding-left: 13px;
`;
