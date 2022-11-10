import styled from "styled-components/native";

interface Props {
  color: string;
  value: number;
  opacity: number;
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

export const Sectiontitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 22px;
  padding-top: 22px;
`;
export const Empty = styled.View`
  width: 10%;
`;

export const TitleBack = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const SectionGraphCircle = styled.View`
  width: 100%;
  margin-top: 30px;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  margin-bottom: 22px;
`;

export const BackgroundGraphCircle = styled.View`
  width: 358px;
  background: ${({ theme }) => theme.colors.backgroundResultSecondary};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
`;

export const BackgroundGraphCircleTotal = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundResultSecondary};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
`;

export const TopGraph = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const GraphCircle = styled.View<Props>`
  width: 128px;
  height: 128px;
  border-radius: 128px;
  border: 7px solid ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 62px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;
export const Percentage = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Results = styled.View`
  background: ${({ theme }) => theme.colors.backgroundModal};
  width: 151px;
  height: 136px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
`;

export const ResultsInfo = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SectionInfos = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const Ball = styled.View<Props>`
  background: ${(props) => props.color};
  width: 16px;
  height: 16px;
  border-radius: 16px;
  margin-right: 8px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
export const InfoValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const SectionResults = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundModal};
  margin-top: 21px;
`;
export const ResultsInfos = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 8px;
`;

export const SectionPerformance = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding-top: 12px;
`;

export const SectionTitlePerformance = styled.View`
  padding-top: 22px;
  padding-left: 20px;
  padding-bottom: 12px;
`;

export const BackgroundGraph = styled.View`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.backgroundModal}; ;
`;

export const Graph = styled.ImageBackground`
  width: 100%;
  height: 118px;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-evenly;
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
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-top: 21px;
`;

export const ResultsInfosPrimary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 8px;
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

export const SectionButton = styled.View`
  width: 100%;
  margin-bottom: 80px;
  margin-top: 31px;
  padding: 9px;
`;

export const Button = styled.View`
  width: 100%;
  margin-top: 9px;
`;

export const ButtonBlocked = styled.View<Props>`
  opacity: ${(Props) => Props.opacity};
`;
