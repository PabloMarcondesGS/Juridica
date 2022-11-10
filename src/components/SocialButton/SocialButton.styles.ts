import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.colorFacebook};
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-left: 15px;
`;

export const Google = styled.Image``;

export const ContainerGoogle = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  margin-top: 20px;
`;

export const TitleGoogle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-left: 15px;
`;
