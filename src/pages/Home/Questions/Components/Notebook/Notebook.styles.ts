import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
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

export const SectionAccordion = styled.View`
  padding-left: 24px;
  padding-right: 24px;
`;

export const Padding = styled.View`
  padding-left: 17px;
`;
