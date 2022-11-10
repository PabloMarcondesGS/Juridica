import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 147px;
  height: 177px;
  background: ${(props) => props.color};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
`;

export const BorderOne = styled.View<Props>`
  width: 145px;
  height: 175px;
  background: ${(props) => props.color};
  border-radius: 6px;
  border-left-width: 3px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.background};
  border-bottom-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const BorderTwo = styled.View<Props>`
  background: ${(props) => props.color};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const BorderThree = styled.View<Props>`
  width: 141px;
  height: 170px;
  background: ${(props) => props.color};
  border-radius: 6px;
  border-left-width: 3px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.background};
  border-bottom-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};

  text-align: center;
  text-transform: uppercase;
`;

export const Circle = styled.View`
  border: 2px solid white;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 23px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};

  text-transform: uppercase;
`;

export const Empty = styled.View`
  width: 100%;
  height: 30%;
`;

export const Repeat = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RepeatText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  padding-left: 5px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
  text-transform: uppercase;
`;

export const Icon = styled.Image``;
