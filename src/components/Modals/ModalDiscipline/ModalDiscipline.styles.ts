import styled from "styled-components/native";

interface Props {
  value: string;
  color: string;
}
export const Modal = styled.Modal`
  flex: 1;
`;

export const Container = styled.SafeAreaView<Props>`
  flex: 1;
  background: ${(Props) => Props.color};
  align-items: center;
`;

export const Scroll = styled.ScrollView``;

export const ContainerTop = styled.View`
  width: 100%;
  padding: 33px;
  align-items: center;
`;
export const Close = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 13px;
`;

export const Title = styled.Text`
  padding-top: 22px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ContainerProgress = styled.View`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-top: 31px;
  border-radius: 8px;
  flex-direction: column;
`;

export const Progress = styled.View<Props>`
  width: ${(props) => props.value};
  height: 8px;
  background: ${({ theme }) => theme.colors.sucess};
  border-radius: 17px;
  align-items: flex-end;
  justify-content: center;
  padding-right: 10px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 900;
  padding-top: 10px;
`;

export const Percentage = styled.Text`
  color: ${({ theme }) => theme.colors.backgroundSecondary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ContainerBottom = styled.View`
  width: 100%;
  padding: 27px;
  padding-bottom: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`;

export const SectionTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const TitleBottom = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Input = styled.View`
  margin-top: 18px;
`;

export const ScrollHorizontal = styled.ScrollView`
  flex-direction: row;
  margin-top: 22px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 24px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};

  text-transform: uppercase;
`;

export const SectionAcordion = styled.View``;
