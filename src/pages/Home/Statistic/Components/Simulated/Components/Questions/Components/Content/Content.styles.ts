import styled from "styled-components/native";

export const Container = styled.View`
  padding-left: 30px;
  padding-right: 26px;
  margin-top: 10px;
`;

export const SectionTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionIcon = styled.View`
  margin-left: 5%;
`;

export const Title = styled.Text`
  width: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 10px;
`;
