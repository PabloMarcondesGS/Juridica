import styled from "styled-components/native";

interface Props {
  color: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  background: ${(Props) => (Props.color ? "#09CBDA" : "#1F1F23")};
  height: 72px;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Profile = styled.Image`
  border-radius: 40px;
  margin-left: 20px;
`;

export const SectionProfile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Ranking = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_bold};
`;

export const Group = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const Since = styled.Text<Props>`
  color: ${(Props) => (Props.color ? "#131418" : "#767676")};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const GraphCircle = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  border: 4px solid ${({ theme }) => theme.colors.sucess};
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;
