import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContainerLogo = styled.View`
  height: 80%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  padding-top: 22px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ContainerInfos = styled.View`
  height: 20%;
  align-items: center;
  justify-content: center;
`;

export const InfoPrimary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const InfoSecondary = styled.Text`
  padding-top: 6px;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;
