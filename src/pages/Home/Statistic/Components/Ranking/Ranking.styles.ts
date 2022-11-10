import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 24px;
`;

export const SectionTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SectionPagination = styled.View`
  margin-top: 35px;
`;
