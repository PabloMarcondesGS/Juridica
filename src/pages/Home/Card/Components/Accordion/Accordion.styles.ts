import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Accordion = styled.View`
  width: 100%;
  height: 81px;
  margin-top: 4px;
`;

export const Container = styled.TouchableOpacity<Props>`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 80px;
  padding-left: 24px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-left-width: 4px;
  border-left-color: ${(props) => props.color};
  padding: 20px;
`;

export const ContainerSelected = styled.TouchableOpacity<Props>`
  background: #333336;
  width: 100%;
  height: 80px;
  padding-left: 24px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-left-width: 4px;
  border-left-color: ${(props) => props.color};
  padding: 20px;
`;

export const TextPrincipal = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
  padding-left: 10px;
`;

export const TextItem = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};

  padding-left: 10px;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
`;
