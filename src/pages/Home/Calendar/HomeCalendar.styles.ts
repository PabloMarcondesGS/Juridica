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

export const SectionTitle = styled.View`
  padding: 25px;

  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  padding-left: 33px;
`;

export const SectionButtons = styled.View`
  padding-left: 25px;
  padding-right: 25px;

  width: 100%;
`;
