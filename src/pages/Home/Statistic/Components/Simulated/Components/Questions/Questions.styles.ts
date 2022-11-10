import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Accordion = styled.View<Props>`
  width: 100%;
  background: ${(Props) => Props.color};
  margin-top: 3px;
`;

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 81px;
  padding-left: 26px;
  padding-right: 26px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-left-width: 4px;
  border-left-color: ${({ theme }) => theme.colors.primary};
`;

export const TextPrincipal = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
`;

export const SectionContent = styled.View`
  width: 100%;
  padding-bottom: 5px;
`;
