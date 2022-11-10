import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 4px;
`;

export const SectionTitle = styled.View`
  width: 85%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Discipline = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-top: 10px;
`;
