import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.backgroundModal};
  width: 100%;
  height: 59px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 24px;
  margin-top: 11px;
`;

export const SectionTitle = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;

export const SubTitlePrimary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const PlaceHolder = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;
