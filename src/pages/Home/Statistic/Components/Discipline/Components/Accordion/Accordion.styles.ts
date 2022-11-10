import styled from "styled-components/native";

interface Props {
  color: string;
  colorMini: number;
  background: string;
  value: number;
}
export const Accordion = styled.View``;

export const Container = styled.TouchableOpacity<Props>`
  background: ${(Props) => Props.color};
  width: 100%;
  border-radius: 8px;
  align-items: center;
  margin-top: 8px;
`;

export const SectionTop = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GraphCircle = styled.View<Props>`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  border: 3px solid ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;
export const Percentage = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Line = styled.View`
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Arrow = styled.View`
  width: 100%;
  height: 28px;
  align-items: center;
  justify-content: center;
`;

export const SectionResults = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundModal};
  margin-top: 21px;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ResultsInfos = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 8px;
`;

export const SectionPerformance = styled.SafeAreaView`
  width: 98%;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  margin-bottom: 8px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
`;

export const PerformanceTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Scroll = styled.ScrollView`
  width: 90%;
`;
