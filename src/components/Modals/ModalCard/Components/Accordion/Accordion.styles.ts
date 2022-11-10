import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Accordion = styled.View`
  margin-top: 10px;
`;

export const Container = styled.View<Props>`
  flex-direction: column;
`;

export const Group = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 65px;
  padding-left: 16px;
  padding-right: 34px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Bottom = styled.View`
  margin-top: 1px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  height: 28px;
  padding-left: 16px;
  padding-right: 34px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const GroupSelected = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.options};
  width: 100%;
  height: 65px;
  padding-left: 16px;
  padding-right: 34px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomSelected = styled.View`
  margin-top: 1px;
  background: ${({ theme }) => theme.colors.options};
  width: 100%;
  height: 28px;
  padding-left: 16px;
  padding-right: 34px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TextPrincipal = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-transform: uppercase;
  padding-left: 10px;
`;

export const Step = styled.Text`
  color: #cccccc;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-transform: uppercase;
  padding-left: 10px;
`;

export const SectionValue = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 9px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-transform: uppercase;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.sucess};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const AccordionItem = styled.View`
  background: ${({ theme }) => theme.colors.options};
  border-radius: 8px;
  margin-top: 10px;
  width: 100%;
  height: 300px;
  padding: 24px;
`;

export const ScrollHorizontal = styled.ScrollView`
  flex-direction: row;
  width: 100%;
`;

export const SectionCheckBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TitleCheckBox = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-left: 10px;
`;
