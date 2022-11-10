import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

export const ContainerTotal = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ContainerTop = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Jump = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  font-size: 16px;
  text-transform: uppercase;
  padding-right: 10px;
`;

export const ContainerJump = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const ContainerCentral = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BorderImage = styled.View`
  width: 202px;
  height: 202px;
  border: 5px solid #ffffff;
  border-radius: 202px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image``;

export const SectionTitle = styled.View`
  width: 100%;
  padding-top: 30px;
`;

export const TitleColor = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: left;
`;
export const SubTitleColor = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  line-height: 19.8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: left;
`;

export const SubTitle = styled.Text`
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.subtitle};
  line-height: 19.8px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  text-align: left;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;
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
  padding-top: 20px;
`;

export const SectionTitleBottom = styled.View``;
