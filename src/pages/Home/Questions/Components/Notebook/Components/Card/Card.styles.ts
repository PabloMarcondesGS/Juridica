import styled from "styled-components/native";

export const Container = styled.View``;
export const Card = styled.View`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  width: 234px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const BorderOne = styled.View`
  width: 232px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-bottom-color: ${({ theme }) => theme.colors.backgroundSecondary};
  justify-content: center;
  align-items: center;
`;

export const BorderTwo = styled.View`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const BorderThree = styled.View`
  width: 230px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  border-left-width: 3px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-bottom-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 11px;
`;

export const SectiontitleCard = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleCard = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const TextCard = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const ContentCard = styled.View`
  align-items: center;
`;
export const TextCardClose = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;

export const SectionButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.View`
  width: 88px;
`;
