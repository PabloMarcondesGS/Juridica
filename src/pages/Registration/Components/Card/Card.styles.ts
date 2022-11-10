import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const ContainerLeft = styled.View`
  width: 49%;
`;
export const ContainerRight = styled.View`
  width: 49%;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  padding: 16px;
  height: 108px;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.cardPrimary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ContainerTitleSecondary = styled.View`
  width: 100%;
  padding: 16px;
  height: 108px;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Background = styled.View`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
`;

export const Image = styled.Image``;

export const Title = styled.Text`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;

export const ContainerMonth = styled.View`
  width: 100%;
  margin-top: 1px;
  padding: 8px;
  height: 59px;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.cardPrimary};
`;

export const ContainerMonhSecondary = styled.View`
  width: 100%;
  margin-top: 1px;
  padding: 8px;
  height: 59px;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.cardSecondary};
`;

export const ContainerYear = styled.View`
  width: 100%;
  margin-top: 1px;
  padding: 8px;
  height: 59px;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.cardPrimary};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ContainerYearSecondary = styled.View`
  width: 100%;
  margin-top: 1px;
  padding: 8px;
  height: 59px;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const SectionInfo = styled.View`
  width: 100%;
  padding-left: 8px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const Value = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Coin = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  color: ${({ theme }) => theme.colors.grayOne};
`;

export const SubInfo = styled.Text`
  font-size: 7px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  color: ${({ theme }) => theme.colors.grayOne};
`;

export const RadioButton = styled.TouchableOpacity`
  margin-top: 6px;
  background: ${({ theme }) => theme.colors.radioColor};
  height: 16px;
  width: 16px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const Selected = styled.View`
  background: ${({ theme }) => theme.colors.background};
  height: 10px;
  width: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
