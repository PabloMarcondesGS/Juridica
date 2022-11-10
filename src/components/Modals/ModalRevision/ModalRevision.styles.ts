import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const ContainerOpacity = styled.View`
  width: 100%;
  height: 10%;
  opacity: 0.7;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  width: 100%;
  height: 90%;
  background: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 22px;
`;

export const ContainerTop = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 31px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const ContainerCentral = styled.View`
  width: 100%;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-top: 15px;
`;
export const SubText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const ContainerBottom = styled.View`
  width: 100%;
  height: 40%;
  justify-content: flex-end;
`;
