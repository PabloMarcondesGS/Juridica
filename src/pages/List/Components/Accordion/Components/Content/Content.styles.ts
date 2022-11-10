import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 26px;
  margin-top: 10px;
`;

export const SectionTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 10px;
`;
