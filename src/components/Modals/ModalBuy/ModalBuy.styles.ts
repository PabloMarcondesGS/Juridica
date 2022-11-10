import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.warning};

  align-items: center;
  justify-content: space-between;
`;

export const ContainerTop = styled.View`
  width: 100%;
  height: 35%;
  padding: 33px;
  align-items: center;
`;
export const Close = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 13px;
`;

export const Icon = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Title = styled.Text`
  padding-top: 22px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const ContainerBottom = styled.View`
  width: 100%;
  height: 65%;
  padding: 27px;
  padding-bottom: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`;

export const TitleInfo = styled.Text`
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const Code = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
  text-align: center;
`;

export const Steps = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const StepsBackground = styled.View`
  background: ${({ theme }) => theme.colors.warning};
  height: 20px;
  width: 20px;
  border-radius: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`;

export const StepsValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
`;

export const StepsInfo = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;
