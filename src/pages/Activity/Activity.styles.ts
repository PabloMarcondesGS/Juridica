import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ContainerTop = styled.View`
  width: 100%;
  height: 57px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
`;

export const SectionTop = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Sectionvalue = styled.View`
  align-items: center;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ValuePrimary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const LabelValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 9px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;

export const Line = styled.View`
  width: 1px;
  height: 57px;
  background: ${({ theme }) => theme.colors.subtitle};
`;

export const SectionOptions = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 32px;
  padding-bottom: 5px;
`;

export const Options = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const TitleOptions = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  padding-left: 13px;
  padding-right: 13px;
`;

export const Padding = styled.View`
  padding: 10px;
`;

export const ContainerCentral = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const BorderOne = styled.View`
  width: 99%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  border-left-width: 3px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.background};
  border-bottom-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const BorderTwo = styled.View`
  width: 99%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const BorderThree = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  border-left-width: 3px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.background};
  border-bottom-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  padding: 18px;
`;

export const SectionTopActivity = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleActivity = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const TextActivity = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-top: 10px;
`;

export const Alternative = styled.View<Props>`
  background-color: ${(Props) =>
    Props.color === "sucess"
      ? " rgba(94, 255, 90, 0.05) "
      : Props.color === "error"
      ? " rgba(248, 8, 1, 0.15)"
      : "#333336"};
  border: 1px solid
    ${(Props) =>
      Props.color === "sucess"
        ? " #5EFF5A"
        : Props.color === "error"
        ? " #F80801"
        : "#333336"};
  width: 100%;
  height: 136px;
  border-radius: 13px;
  padding: 17px;
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
`;

export const AlternativeValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const AlternativeText = styled.Text`
  max-width: 260px;
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-left: 12px;
`;

export const AlternativeButton = styled.TouchableOpacity`
  width: 21px;
  height: 21px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.subtitle};
  align-items: center;
  justify-content: center;
`;

export const SectionFeedBack = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
`;

export const TextFeedBack = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
`;

export const LineHorizontal = styled.View`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 13px;
  margin-bottom: 13px;
`;

export const SectionButton = styled.View`
  width: 100%;
  padding-top: 10px;
`;
