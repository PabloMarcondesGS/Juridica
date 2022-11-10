import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 33px;
  margin-bottom: 50px;
`;

export const SectionTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  margin-left: 24px;
`;
