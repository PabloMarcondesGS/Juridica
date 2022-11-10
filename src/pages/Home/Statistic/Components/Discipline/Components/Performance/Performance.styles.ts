import styled from "styled-components/native";

interface Props {
  colorMini: number;
}

export const Container = styled.View``;

export const PerformanceInfos = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundActivity};
  margin-top: 21px;
`;

export const Infos = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_bold};
  padding-bottom: 8px;
`;

export const GraphCircleMini = styled.View<Props>`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: 3px solid
    ${(props) =>
      props.colorMini > 60
        ? "#5EFF5A"
        : props.colorMini === 50
        ? "#FFC77D"
        : "#FF2D2E"};
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const ValueMini = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  text-align: center;
`;
export const PercentageMini = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 9px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
