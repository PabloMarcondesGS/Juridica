import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  background-color: "rgba(0,0,0,0.9)";

  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ContainerModal = styled.View`
  width: 329px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundModal};
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const SectionTitle = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

export const SectionTitleNoSearch = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Input = styled.View`
  padding-top: 26px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Title = styled.Text`
  width: 90%;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 16px;
`;

export const TitleNoSearch = styled.Text`
  width: 95%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 16px;
`;
export const TitleMoreOptions = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 16px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  text-align: center;
`;

export const Buttons = styled.TouchableOpacity`
  width: 300px;
  height: 31px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.options};
  align-items: center;
  justify-content: center;
  margin-top: 22px;
`;

export const ButtonsBlock = styled.TouchableOpacity`
  width: 300px;
  height: 31px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.options};
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  opacity: 0.4;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  text-transform: uppercase;
`;
