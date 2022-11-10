import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 72px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 8px;
  margin-top: 8px;
`;

export const SectionLeft = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  padding-left: 14px;
`;

export const SectionRight = styled.View`
  flex-direction: row;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
`;
