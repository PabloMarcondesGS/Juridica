import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 30px;
`;

export const Sectiontitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;
export const Empty = styled.View`
  width: 10%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const NameNotebook = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-top: 20px;
`;

export const Input = styled.TextInput`
  width: 80%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  text-align: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 150px;
`;
