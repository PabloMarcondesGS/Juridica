import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContainerCentral = styled.View`
  width: 100%;
  padding: 28px;
`;
export const Scroll = styled.ScrollView`
  height: 100%;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Empty = styled.View``;

export const TitleHeader = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const SectionTitle = styled.View`
  width: 100%;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 16px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const SectionInput = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Input = styled.View`
  margin-top: 8px;
`;

export const SectionButton = styled.View`
  margin-top: 14px;
`;

export const Button = styled.View`
  margin-top: 8px;
`;

export const Change = styled.View``;
