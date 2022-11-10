import styled from "styled-components/native";

interface Props {
  color: string;
  background: string;
  value: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundResult};
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const SectionBack = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 28px;
`;

export const TitleBack = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Empty = styled.View``;

export const ContainerGraph = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`;

export const SectionPerformance = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding-top: 12px;
  align-items: center;
`;
export const SectionTitlePerformance = styled.View`
  width: 100%;
  padding-top: 22px;
  padding-left: 20px;
  padding-bottom: 12px;
  background: ${({ theme }) => theme.colors.background};
`;

export const ScrollHorizontal = styled.ScrollView`
  flex-direction: row;
  margin-top: 22px;
  margin-left: 35px;
  padding-right: 35px;
`;

export const Card = styled.View`
  width: 234px;
  padding: 11px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${({ theme }) => theme.colors.backgroundModal};
  border-radius: 8px;
`;
export const SectiontitleCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleCard = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const TextCard = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ContainerButton = styled.View`
  margin-top: 20px;
`;

export const Button = styled.View`
  width: 248px;
`;

export const SectionButton = styled.View`
  width: 100%;
  padding-left: 22px;
  align-items: center;
  flex-direction: row;
`;
export const ButtonQuestionLong = styled.TouchableOpacity<Props>`
  padding-left: 16px;
  padding-right: 16px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(Props) => Props.background};
  margin-right: 22px;
`;

export const ButtonTitle = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};

  text-align: center;
`;

export const SectionResults = styled.View`
  width: 100%;
  padding: 22px;
  margin-bottom: 100px;
`;
