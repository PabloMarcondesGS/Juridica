import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 76px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 17px;
  padding-right: 17px;
  margin-top: 8px;
`;

export const ContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionDate = styled.View`
  flex-direction: column;
`;
export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;
export const SectionText = styled.View`
  flex-direction: column;
  padding-left: 25px;
`;
export const TextBig = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-transform: uppercase;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
export const SubText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;
