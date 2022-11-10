import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
  padding-left: 22px;
  padding-right: 22px;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ContainerTop = styled.View`
  width: 100%;
  height: 57px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionTop = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Sectionvalue = styled.View`
  align-items: center;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ValuePrimary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const LabelValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 9px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Line = styled.View`
  width: 1px;
  height: 57px;
  background: ${({ theme }) => theme.colors.subtitle};
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

export const SectionInfos = styled.View`
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

export const ContainerBottom = styled.View`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 16px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ContainerBottomButton = styled.View`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 60px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const SectionTrouble = styled.View`
  width: 100%;
  align-items: center;
`;

export const SectionDeepening = styled.View`
  width: 100%;
  align-items: center;
`;

export const SectionJump = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const Jump = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  padding-right: 10px;
`;

export const SectionLine = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MiniLine = styled.View`
  width: 45%;
  height: 1px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 13px;
  margin-bottom: 13px;
  opacity: 0.3;
`;

export const Button = styled.View`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const TextTrouble = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SectionTButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
