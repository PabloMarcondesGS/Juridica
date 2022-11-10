import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  background-color: "rgba(0,0,0,0.9)";

  flex: 1;
  justify-content: flex-end;
`;
export const ContainerModal = styled.SafeAreaView`
  width: 100%;
  height: 95%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundModal};
  justify-content: space-between;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;
export const Padding = styled.View`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const SectionTitle = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.suisses_semiBold};
  padding-bottom: 8px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.suisses_medium};
  padding-bottom: 16px;
`;

export const Next = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  width: 64px;
  height: 64px;
  border-radius: 64px;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export const SectionNext = styled.View`
  position: absolute;
  width: 100%;
  align-items: flex-end;
  bottom: 40px;
`;
