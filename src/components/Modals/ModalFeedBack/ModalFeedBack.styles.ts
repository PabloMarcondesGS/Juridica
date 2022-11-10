import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const ContainerModal = styled.View`
  flex: 1;
`;
export const ContainerOpacity = styled.View`
  width: 100%;
  height: 10%;
  opacity: 0.7;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 90%;
  background: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  align-items: center;
  padding: 22px;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ContainerTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 31px;
  padding: 10px;
`;

export const Empty = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ContainerCentral = styled.View`
  width: 100%;
`;

export const SectionCard = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

export const ContainerCard = styled.View`
  width: 206px;
  height: 222px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-top: 20px;
`;

export const SectionTopCard = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const SectionTextCard = styled.View`
  width: 100%;
  align-items: center;
`;

export const TitleCard = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const TextCard = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
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

export const LineHorizontal = styled.View`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 13px;
  margin-bottom: 13px;
`;

export const SectionInfos = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Infos = styled.View`
  width: 100%;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SubInfo = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const NumberInfo = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-top: 15px;
`;
export const SubText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const SectionOptions = styled.View`
  padding-left: 20px;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  margin-top: 90px;
  margin-bottom: 30px;
`;
