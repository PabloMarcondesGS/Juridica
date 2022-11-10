import styled from "styled-components/native";

export const Container = styled.View`
  height: 90px;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 23px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  font-size: 24px;
  text-transform: uppercase;
`;

export const Empty = styled.View`
  width: 10%;
`;
