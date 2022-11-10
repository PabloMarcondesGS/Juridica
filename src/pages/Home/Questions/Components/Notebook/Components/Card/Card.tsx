import React, { useState } from "react";
import * as S from "./Card.styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../../../../../components/Button/Button";

type ICard = {
  title: string;
  text: string;
};

const CardBook: React.FC<ICard> = ({ title, text }) => {
  const [close, setClose] = useState(false);
  return (
    <S.Container>
      <S.Card>
        <S.BorderOne>
          <S.BorderTwo>
            <S.BorderThree>
              {close === true ? (
                <S.ContentCard>
                  <MaterialCommunityIcons
                    name="alert-rhombus-outline"
                    size={84}
                    color="white"
                  />
                  <S.TextCardClose>
                    Você tem certeza que quer remover essa questão do seu
                    caderno de erros?
                  </S.TextCardClose>
                  <S.SectionButton>
                    <S.Button>
                      <Button text="Não" type="outline" />
                    </S.Button>

                    <S.Button>
                      <Button text="Sim" type="solid" />
                    </S.Button>
                  </S.SectionButton>
                </S.ContentCard>
              ) : (
                <S.ContentCard>
                  <S.SectiontitleCard>
                    <S.TitleCard>{title}</S.TitleCard>
                    <Ionicons
                      name="close-outline"
                      size={20}
                      color="#767676"
                      onPress={() => setClose(true)}
                    />
                  </S.SectiontitleCard>
                  <S.TextCard>{text}</S.TextCard>
                </S.ContentCard>
              )}
            </S.BorderThree>
          </S.BorderTwo>
        </S.BorderOne>
      </S.Card>
    </S.Container>
  );
};

export default CardBook;
