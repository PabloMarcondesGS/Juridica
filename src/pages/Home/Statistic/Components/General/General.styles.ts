import styled from "styled-components/native";

interface Props {
  color: string;
  background: string;
  value: number;
}

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 45px;
`;

export const BackgroundGraph = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 10px;
`;

export const SectionFilter = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 40px;
  border: 1px solid #323236;
  border-radius: 8px;
`;

export const ButtonFilter = styled.TouchableOpacity<Props>`
  height: 40px;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-left: 7%;
  padding-right: 7%;
`;

export const FilterTitle = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;

export const TopGraph = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-top: 34px;
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
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
export const InfoValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const SectionResults = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundModal};
  margin-top: 21px;
  padding-left: 14px;
  padding-right: 14px;
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

export const SectionAlert = styled.View`
  width: 100%;
  height: 65px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundModal};
  margin-top: 21px;
  padding-left: 14px;
  padding-right: 14px;
`;

export const Logo = styled.Image`
  width: 28px;
  height: 28px;
  margin-left: 15px;
`;

export const AlertText = styled.Text`
  width: 220px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const AlertTextGold = styled.Text`
  width: 220px;
  color: #ffc77d;
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const SectionButton = styled.View`
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 32px;
`;
export const ButtonQuestionLong = styled.TouchableOpacity<Props>`
  width: 190px;
  height: 45px;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonTitle = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};

  text-align: center;
`;
