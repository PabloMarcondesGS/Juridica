import styled from "styled-components/native";

interface Props {
  color: string;
  background: string;
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

export const Padding = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
`;

export const SectionTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ButtonQuestion = styled.TouchableOpacity<Props>`
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px;
`;

export const ButtonTitle = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
  text-transform: uppercase;
`;

export const SectionButton = styled.View`
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 31px;
`;

export const SectionComent = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerCard = styled.View`
  flex-direction: column;
`;

export const SectionCard = styled.ScrollView`
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
`;
