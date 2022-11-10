import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ContainerCenter = styled.View`
  width: 100%;
`;
export const ContainerBottom = styled.View`
  width: 100%;
  padding: 22px;
  margin-bottom: 50px;
`;
export const Button = styled.View`
  margin-top: 8px;
`;

export const SectionCard = styled.View`
  width: 100%;
  padding: 12px;
`;

export const SectionContents = styled.View`
  width: 100%;
`;
export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-top: 18px;
`;

export const CardSectionTitle = styled.View`
  flex-direction: column;
  padding-left: 20px;
`;

export const Icon = styled.Image`
  margin-left: 22px;
`;

export const CardSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;
export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const CreditCard = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  height: 184px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.subtitle};
  padding: 18px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 4px;
`;

export const SectionTitle = styled.View`
  flex-direction: column;
`;

export const CreditCardText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  width: 100%;
  padding-top: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const SectionInputMini = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const InputMini = styled.View`
  width: 160px;
`;

export const SectionOur = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
`;
export const SectionButton = styled.View`
  margin-bottom: 30px;
`;

export const Our = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  padding-left: 5px;
  padding-right: 5px;
`;

export const Line = styled.View`
  width: 50%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.subtitle};
`;

export const TitlePrimary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  padding-top: 22px;
  padding-bottom: 12px;
`;

export const SubTitleMedium = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-top: 8px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  flex-direction: column;
  padding-left: 22px;
  padding-right: 22px;
`;
export const Input = styled.View`
  margin-top: 8px;
`;

export const Next = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 64px;
  height: 64px;
  border-radius: 64px;
  align-items: center;
  justify-content: center;
`;

export const TitleBottom = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  line-height: 19.8px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const TitleColorBottom = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  line-height: 19.8px;
`;

export const SectionTitleBottom = styled.View``;

export const ContainerBack = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 22px;
  padding-right: 22px;
  padding-bottom: 40px;
`;
