import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ContainerMini = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};
  text-transform: uppercase;
`;

export const TitleWhite = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
`;

export const ContainerOutline = styled.TouchableOpacity`
  border: 2px solid white;
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ContainerOutlineMini = styled.TouchableOpacity`
  border: 2px solid white;
  width: 100%;
  height: 34px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TitleOutline = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
`;

export const TitleOutlineEye = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
  margin-left: 24px;
`;

export const ContainerRevision = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.sucess};

  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TitleRevision = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
  margin-left: 24px;
`;

export const ContainerDark = styled.TouchableOpacity`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ContainerDarkMini = styled.TouchableOpacity`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TitleDark = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
`;

export const ContainerDeepening = styled.TouchableOpacity`
  border: 2px solid ${({ theme }) => theme.colors.blue};
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TitleDeepening = styled.Text`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
`;

export const TitleRed = styled.Text`
  color: ${({ theme }) => theme.colors.redButton};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.cairo_bold};

  text-transform: uppercase;
`;

export const ContainerRed = styled.TouchableOpacity`
  border: 2px solid ${({ theme }) => theme.colors.redButton};
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
