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
  padding: 26px;
`;

export const ScrollNoPadding = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Padding = styled.ScrollView`
  padding: 26px;
`;

export const Sectiontitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-left: 10px;
`;

export const SectionButton = styled.View`
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
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

export const SectionFilter = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 40px;
  border: 1px solid #1f1f23;
  border-radius: 8px;
`;

export const ButtonFilter = styled.TouchableOpacity<Props>`
  height: 40px;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-left: 26px;
  padding-right: 26px;
`;

export const FilterTitle = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;

export const SectionContent = styled.View`
  width: 100%;
  flex-direction: column;
  padding-top: 20px;
`;

export const SectionAccordion = styled.View`
  width: 100%;
`;
