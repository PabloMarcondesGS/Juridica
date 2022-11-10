import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.Image``;

export const ContainerTop = styled.KeyboardAvoidingView`
  width: 100%;
  flex-direction: column;
  padding: 24px;
`;

export const SectionLogo = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
`;

export const Close = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const SectionTitle = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-top: 4px;
`;

export const ContainerCentral = styled.View`
  width: 100%;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Input = styled.View`
  width: 100%;
  padding-bottom: 16px;
`;
export const Button = styled.View`
  width: 100%;
  padding-top: 24px;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  flex-direction: column;
  margin-bottom: 50px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const SectionOur = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Our = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  padding-left: 5px;
  padding-right: 5px;
`;

export const Line = styled.View`
  width: 50%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.subtitle};
`;
