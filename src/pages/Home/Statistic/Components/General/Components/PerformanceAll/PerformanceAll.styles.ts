import styled from "styled-components/native";

interface Props {
  color: string;
  background: string;
  value: number;
}

export const Container = styled.View``;

export const SectionPerformance = styled.View`
  width: 100%;
  padding-top: 12px;
`;

export const SectionTitlePerformance = styled.View`
  padding-top: 22px;
  padding-bottom: 12px;
  width: 100%;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const BackgroundGraphPerfomance = styled.View`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
`;

export const Graph = styled.ImageBackground`
  height: 118px;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-evenly;
  margin-right: 29px;
  margin-left: 29px;
`;

export const SectionValueGraph = styled.View`
  width: 50px;
  align-items: center;
`;

export const SectionValueGraphBig = styled.View`
  width: 72px;
  align-items: center;
`;

export const ValueGraph = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;

export const GraphStep = styled.View<Props>`
  background: ${(props) => props.color};
  width: 40px;
  height: ${(props) => props.value}px;
`;
export const GraphStepBig = styled.View<Props>`
  background: ${(props) => props.color};
  width: 65px;
  height: ${(props) => props.value}px;
`;

export const Line = styled.View<Props>`
  background: ${(props) => props.color};
  width: 100%;
  height: 3px;
  margin-top: 3px;
`;
export const StatusGraph = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const SectionStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-top: 21px;
  margin-left: 29px;
  margin-right: 29px;
`;

export const ResultsInfosPrimary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 8px;
`;

export const SectionResults = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundModal};
  margin-top: 21px;
  padding-left: 23px;
  padding-right: 23px;
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
