import styled from "styled-components/native";

interface Props {
  color: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const SectionOptions = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 16px;
`;

export const Button = styled.TouchableOpacity``;

export const Options = styled.Text<Props>`
  color: ${(Props) => (Props.color === true ? "#FFFFFF" : "#767676")};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ContainerContent = styled.View`
  width: 100%;
`;
