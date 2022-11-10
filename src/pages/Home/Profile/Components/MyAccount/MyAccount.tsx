import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input/Input";
import ModalSucess from "../../../../../components/Modals/ModalSucess/ModalSucess";
import * as S from "./MyAccount.styles";
interface Props {
  action: () => void;
}

const MyAccount: React.FC<Props> = (props: Props) => {
  const [changePassword, setChangePassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCentral>
          <S.ContainerHeader>
            <StatusBar barStyle="light-content" backgroundColor={"#131418"} />

            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="white"
              onPress={props.action}
            />
            <S.TitleHeader>Minha Conta</S.TitleHeader>
            <S.Empty />
          </S.ContainerHeader>
          <S.SectionTitle>
            <S.Title>Usuário</S.Title>
            <S.SubTitle>
              Aqui você configura todas as questões de conta
            </S.SubTitle>
          </S.SectionTitle>
          <S.SectionInput>
            <Input
              label="E-mail"
              type="complete"
              placeholder="gabriel@duckstudio.design"
            />
            <S.Input>
              <Input label="E-mail" placeholder="Placeholder" />
            </S.Input>
            <S.Input>
              <Input label="Endereço" placeholder="Placeholder" />
            </S.Input>
          </S.SectionInput>
          <S.SectionTitle>
            <S.Title>Pagamento</S.Title>
            <S.SubTitle>
              Aqui você configura todas as questões de conta
            </S.SubTitle>
          </S.SectionTitle>
          <S.SectionInput>
            <Input
              label="Cartão de crédito"
              type="complete"
              placeholder="gabriel@duckstudio.design"
            />
            <S.Input>
              <Input label="senha" placeholder="Placeholder" />
            </S.Input>
            <S.Input>
              <Input label="Endereço" placeholder="Placeholder" />
            </S.Input>
          </S.SectionInput>
          <S.SectionTitle>
            <S.Title>Segurança</S.Title>
            <S.SubTitle>
              Aqui você configura todas as questões de conta
            </S.SubTitle>
          </S.SectionTitle>
          {changePassword === true ? (
            <View></View>
          ) : (
            <S.Button>
              <Button
                text="alterar senha de acesso"
                type="dark"
                onPress={() => setChangePassword(true)}
              />
            </S.Button>
          )}
          {changePassword && (
            <S.Change>
              <S.SectionInput>
                <Input label="Senha atual" placeholder="Placeholder" />
                <S.Input>
                  <Input
                    label="nova senha"
                    type="completeSecondary"
                    placeholder="Placeholder"
                  />
                </S.Input>
                <S.Input>
                  <Input
                    label="repetir nova senha"
                    type="completeSecondary"
                    placeholder="Placeholder"
                  />
                </S.Input>
              </S.SectionInput>
              <S.SectionButton>
                <S.Button>
                  <Button
                    onPress={() => setModalVisible(true)}
                    text="confirmar"
                    type="solidWhite"
                  />
                </S.Button>
                <S.Button>
                  <Button
                    text="cancelar"
                    type="outline"
                    onPress={() => setChangePassword(false)}
                  />
                </S.Button>
              </S.SectionButton>
            </S.Change>
          )}
        </S.ContainerCentral>
      </S.Scroll>
      <ModalSucess
        open={modalVisible}
        close={() => setModalVisible(!modalVisible)}
        titleSucess="Alterar senha"
        textSucess="Senha alterada!"
        subTextSucess="Sua senha de acesso foi alterada com sucesso!"
      />
    </S.Container>
  );
};

export default MyAccount;
