import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Step = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Progress = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;

export const Line = styled.View`
  width: 48%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.subtitle};
  border: 3px solid #767676;
  border-radius: 4px;
  margin-left: 6px;
  margin-right: 6px;
`;

export const LineOcult = styled.View`
  width: 48%;
  height: 3px;
  border-radius: 4px;
`;
export const ProgressOcult = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  margin-right: 5px;
`;
