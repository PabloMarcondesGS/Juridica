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

export const SectionImage = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 41px;
  margin-bottom: 50px;
`;

export const Profile = styled.ImageBackground`
  width: 112px;
  height: 112px;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
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

export const SectionSettings = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
`;

export const TitleSettings = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SectionLight = styled.View`
  width: 100%;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
`;

export const SunBorder = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 60px;
  margin-right: 26px;
`;
