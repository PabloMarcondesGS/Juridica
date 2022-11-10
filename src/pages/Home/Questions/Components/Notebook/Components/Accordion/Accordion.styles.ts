import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Accordion = styled.View``;

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: ${(Props) => Props.color};
  padding: 17px;
`;

export const Content = styled.View`
  padding: 17px;
  margin-top: 3px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  margin-top: 17px;
  margin-bottom: 17px;
`;

export const Cards = styled.View`
  flex-direction: row;
`;
