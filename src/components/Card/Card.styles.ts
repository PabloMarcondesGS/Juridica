import styled from "styled-components/native";

interface Props {
  opacity: number;
}

export const Container = styled.View<Props>`
  width: 206px;
  height: 222px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  opacity: ${(props) => props.opacity};
`;

export const BorderOne = styled.View`
  width: 204px;
  height: 220px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  border-left-width: 3px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.options};
  border-bottom-color: ${({ theme }) => theme.colors.options};
  justify-content: center;
  align-items: center;
`;

export const BorderTwo = styled.View`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const BorderThree = styled.View`
  width: 200px;
  height: 218px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  border-left-width: 3px;
  border-bottom-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.options};
  border-bottom-color: ${({ theme }) => theme.colors.options};
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-between;
`;

export const SectionCheckbox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const SectionSecondary = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TitleSecondary = styled.Text`
  color: ${({ theme }) => theme.colors.sucess};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;
export const TitleSecondaryWhite = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SectionBottom = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Line = styled.View`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.subtitle};
  border-radius: 4px;
`;

export const TextBottom = styled.Text`
  color: #cccccc;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SubTextBottom = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
`;

export const Ellipsis = styled.Text`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundSecondary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;
