import styled from "styled-components/native";

interface Props {
  color: string;
  background: string;
}

export const Container = styled.View`
  padding: 25px;
`;

export const SectionTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  padding-left: 33px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 22px;
`;

export const SectionFilter = styled.View`
  margin-bottom: 42px;
`;

export const SectionButton = styled.View`
  margin-bottom: 42px;
  height: 138px;
  justify-content: space-between;
`;

export const CheckBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

export const CheckBoxTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  padding-left: 13px;
`;

export const SectionQuestions = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 46px;
  padding-right: 46px;
  padding-bottom: 22px;
`;

export const Questions = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 700;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
`;
