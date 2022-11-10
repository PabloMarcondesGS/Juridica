import styled from "styled-components/native";

type Props = {
  color: string;
};

export const ContainerTotal = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 100px;
`;

export const Logo = styled.Image``;
export const Container = styled.View<Props>`
  width: 58px;
  height: 81px;
  background: ${(Props) => Props.color};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const BorderOne = styled.View<Props>`
  width: 56px;
  height: 79px;
  background: ${(Props) => Props.color};
  border-radius: 8px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.background};
  border-bottom-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const BorderTwo = styled.View<Props>`
  background: ${(Props) => Props.color};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const BorderThree = styled.View<Props>`
  width: 54px;
  height: 77px;
  background: ${(Props) => Props.color};
  border-radius: 8px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const New = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.primary};
  border: 4px solid ${({ theme }) => theme.colors.background};
  position: absolute;
  bottom: 68px;
  left: 38px;
  z-index: 999;
  align-items: center;
  justify-content: center;
`;

export const NewValue = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_bold};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  margin-left: 16px;
`;
