import styled from "styled-components/native";

interface Props {
  color: string;
  background: string;
}

export const Container = styled.View`
  width: 100%;
`;
export const Padding = styled.View`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 24px;
`;

export const SectionFilter = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 40px;
  border: 1px solid #323236;
  border-radius: 8px;
`;

export const ButtonFilter = styled.TouchableOpacity<Props>`
  height: 40px;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-left: 7%;
  padding-right: 7%;
`;

export const FilterTitle = styled.Text<Props>`
  color: ${(props) => props.color};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;
