import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: space-between;
  padding: 22px;
`;

export const ContainerTop = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Empty = styled.View``;

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
  padding-left: 5px;
  padding-right: 5px;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  text-align: center;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  height: 40%;
  justify-content: flex-end;
`;
