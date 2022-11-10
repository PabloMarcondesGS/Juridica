import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ContainerHeader = styled.TouchableOpacity`
  height: 120px;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 23px;
`;

export const Profile = styled.Image`
  border-radius: 80px;
  margin-left: 18px;
`;

export const SectionTitle = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;

export const Since = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;
export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 64px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  margin-top: 4px;
`;
export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-left: 28px;
`;
export const SectionButton = styled.View`
  width: 100%;
  padding: 25px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  text-align: center;
  padding-top: 13px;
`;

export const SectionLogo = styled.View`
  width: 100%;
  align-items: center;
  padding-left: 68px;
  padding-right: 68px;
  padding-top: 50px;
  padding-bottom: 60px;
`;
export const Logo = styled.Image``;
