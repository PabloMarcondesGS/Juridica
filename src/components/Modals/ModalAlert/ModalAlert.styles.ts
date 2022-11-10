import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  background-color: "rgba(0,0,0,0.6)";
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.View`
  width: 305px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundModal};
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const ContainerTop = styled.View`
  width: 100%;
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
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;

export const SubTitle = styled.Text`
  padding-top: 22px;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  text-align: center;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  align-items: center;
`;

export const SectionButton = styled.View`
  width: 100%;
  flex-direction: row;
  padding-left: 22px;
  padding-right: 22px;
  justify-content: space-between;
`;

export const Button = styled.View`
  width: 94px;
  margin-top: 32px;
`;
