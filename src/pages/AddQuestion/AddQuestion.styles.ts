import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 26px;
`;

export const ScrollNoPadding = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Padding = styled.ScrollView`
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 26px;
`;

export const Sectiontitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
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

export const SectionTitle = styled.View`
  padding: 25px;

  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const TitleInfos = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  padding-left: 33px;
`;

export const SectionBook = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
`;

export const ContainerButton = styled.View`
  height: 115px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 23px;
`;
