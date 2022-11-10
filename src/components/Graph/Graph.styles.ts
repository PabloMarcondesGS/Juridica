import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const GraphCycleExternal = styled.View`
  z-index: 99999;
`;
export const GraphCycleExternalBackground = styled.View`
  position: absolute;
  top: 0px;
`;

export const GraphCycleInternal = styled.View`
  position: absolute;
  top: 30px;
  z-index: 99999;
`;

export const GraphCycleInternalBackground = styled.View`
  position: absolute;
  top: 30px;
`;

export const ContainerInfos = styled.View`
  width: 100%;
  align-items: center;
  bottom: 40px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.grayOne};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Complete = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  margin-top: 4px;
`;

export const BackgroundInfos = styled.View`
  background: ${({ theme }) => theme.colors.backgroundResultSecondary};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  margin-top: 26px;
`;

export const Approval = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SectionInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Ball = styled.View<Props>`
  background: ${(Props) => Props.color};
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 8px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;
