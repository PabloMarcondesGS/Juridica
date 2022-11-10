import styled from "styled-components/native";

interface Props {
  color: string;
  font: string;
}

export const Container = styled.View`
  width: 80px;
  height: 75px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 80px;
  height: 75px;
  align-items: center;
  justify-content: center;
`;

export const ButtonDisabled = styled.TouchableOpacity`
  width: 80px;
  height: 75px;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
`;

export const ContainerButton = styled.View<Props>`
  width: 80px;
  height: 75px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${(props) => props.font};
  background: ${(props) => props.color};
`;

export const Text = styled.Text<Props>`
  color: ${(props) => props.font};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Line = styled.View<Props>`
  width: 100%;
  height: 5px;
  background: ${(props) => props.color};
  margin-top: 10px;
`;
