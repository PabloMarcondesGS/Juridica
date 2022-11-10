import styled from "styled-components/native";

interface Props {
  value: string;
}

export const Container = styled.View`
  width: 100%;
  height: 25px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-top: 31px;
  border-radius: 17px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Progress = styled.View<Props>`
  width: ${(props) => props.value};
  height: 25px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 17px;
  align-items: flex-end;
  justify-content: center;
  padding-right: 10px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-right: 15px;
`;
