import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContainerTotal = styled.View``;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.View`
  width: 100%;
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};

  padding-top: 8px;
`;

export const ContainerCenter = styled.View`
  width: 100%;
`;

export const SectionOptions = styled.View`
  padding-left: 12px;
  padding-right: 12px;
`;

export const SectionOptionsRow = styled.View`
  width: 65%;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  align-items: flex-end;
  padding-right: 22px;
  margin-bottom: 55px;
`;

export const Next = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 64px;
  height: 64px;
  border-radius: 64px;
  align-items: center;
  justify-content: center;
`;
