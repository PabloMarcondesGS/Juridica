import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Padding = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;
export const SectionTitle = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 37px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const ScrollHorizontal = styled.ScrollView`
  flex-direction: row;
  margin-top: 22px;
  width: 100%;
`;
export const Button = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const SectionAccordion = styled.View`
  width: 100%;
`;

export const Accordion = styled.View`
  width: 100%;
  margin-top: 25px;
`;
