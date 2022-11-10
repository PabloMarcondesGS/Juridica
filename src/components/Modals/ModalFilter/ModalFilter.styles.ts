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
  justify-content: space-between;
`;

export const SectionButton = styled.View`
  width: 100%;
  padding-left: 26px;
  padding-right: 26px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 16px;
`;

export const Buttons = styled.TouchableOpacity`
  width: 100%;
  margin-top: 22px;
  margin-bottom: 26px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const SubTextButton = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-top: 8px;
`;
