import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;
