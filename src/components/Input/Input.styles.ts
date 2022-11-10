import styled from "styled-components/native";

interface Props {
  color: string;
}

export const ContainerInput = styled.View``;

export const Container = styled.View<Props>`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 64px;
  padding-left: 24px;
  justify-content: center;
  border-left-width: 8px;
  border-left-color: ${(props) => props.color};
`;

export const ContainerComplete = styled.View<Props>`
  width: 100%;
  height: 64px;
  padding-left: 24px;
  justify-content: center;
  border-left-width: 8px;
  border-left-color: ${(props) => props.color};
`;

export const ContainerBig = styled.View<Props>`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 181px;
  padding-left: 24px;
  padding-top: 10px;
  border-left-width: 8px;
  border-left-color: ${(props) => props.color};
`;

export const ContainerMedium = styled.View<Props>`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 102px;
  padding-left: 24px;
  padding-top: 10px;
  border-left-width: 8px;
  border-left-color: ${(props) => props.color};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const ContainerSearch = styled.View<Props>`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 64px;
  padding-left: 24px;
  flex-direction: row;
  align-items: center;
  border-left-width: 8px;
  border-left-color: ${(props) => props.color};
`;

export const InputSearch = styled.TextInput`
  margin-left: 14px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;
