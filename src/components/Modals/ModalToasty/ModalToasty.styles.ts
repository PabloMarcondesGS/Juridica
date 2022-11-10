import styled from "styled-components/native";

interface Props {
  sucess: boolean;
}

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
`;
export const ContainerModal = styled.View`
  margin-top: 50px;
  width: 317px;
  height: 73px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundModal};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLeft = styled.View<Props>`
  width: 64px;
  height: 100%;
  background-color: ${(Props) => (Props.sucess ? "#04BF7B" : "#FF4341")};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  margin-right: 15px;
  width: 70%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
