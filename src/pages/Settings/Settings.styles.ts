import styled from "styled-components/native";

interface Props {
  color: string;
  background: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ScrollNoPadding = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Padding = styled.View`
  padding: 30px;
`;

export const Sectiontitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-top: 42px;
`;
export const Empty = styled.View`
  width: 10%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
export const SectionInfos = styled.View`
  width: 100%;
  padding: 30px;
`;
export const SectionInfosMini = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`;

export const SectionInfosRow = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const InfoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const InfoSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const ContainerOptions = styled.View`
  width: 100%;
  align-items: center;
`;

export const SectionOptions = styled.View`
  width: 133px;
  height: 33px;
  border-radius: 33px;
  background: ${({ theme }) => theme.colors.options};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SectionText = styled.View`
  padding-top: 24px;
  padding-bottom: 50px;
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-transform: uppercase;
`;

export const ButtonOptions = styled.TouchableOpacity<Props>`
  width: 33px;
  height: 33px;
  border-radius: 33px;
  background: ${(props) => props.color};
`;

export const ContainerButton = styled.View`
  height: 115px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 23px;
`;

export const CheckBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 26px;
`;

export const CheckBoxTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-left: 13px;
`;

export const SectionMinutes = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 46px;
  padding-right: 46px;
`;

export const Minutes = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Cycle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.backgroundModal};
  width: 100%;
  height: 59px;
  border-radius: 10px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SectionTitleButton = styled.View`
  flex-direction: column;
`;

export const TitleButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const MiniButton = styled.TouchableOpacity`
  width: 150px;
  height: 31px;
  background: ${({ theme }) => theme.colors.options};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const MiniButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  text-align: center;
`;

export const ButtonQuestion = styled.TouchableOpacity<Props>`
  width: 121px;
  height: 66px;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px;
`;

export const ButtonQuestionLong = styled.TouchableOpacity<Props>`
  width: 190px;
  height: 50px;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonTitle = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;

export const SectionButton = styled.View`
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;
export const SectionInput = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;

  flex-direction: column;
`;

export const SectionButtonView = styled.View`
  margin-bottom: 112px;
`;

export const Input = styled.View`
  margin-top: 20px;
`;

export const ContainerCentral = styled.View`
  width: 100%;
  height: 495px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  align-items: center;
  justify-content: space-between;
  padding: 22px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const SectionTopCard = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

export const IconPress = styled.TouchableOpacity``;

export const Icon = styled.Image`
  margin-right: 28px;
`;

export const SectionTextCard = styled.View`
  width: 100%;
  align-items: center;
`;

export const TitleCard = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const TextCard = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const TextCardBackground = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SectionBottomCard = styled.View`
  width: 100%;
  align-items: center;
`;

export const SectionFeedBack = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TextFeedBack = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
`;

export const LineHorizontal = styled.View<Props>`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${(props) => props.color};
  margin-top: 13px;
  margin-bottom: 13px;
`;

export const SectionInfosCard = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Infos = styled.View``;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SubInfo = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const NumberInfo = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
