import React from "react";
import * as S from "./CardProfile.styles";
import Profile from "../../../../../../../../assets/profile.png";

type ICard = {
  you?: boolean;
  name: string;
  since?: string;
  value: number;
};

const CardProfile: React.FC<ICard> = ({ you, name, since, value }) => {
  return (
    <S.Container color={you}>
      <S.SectionProfile>
        <S.Ranking>1</S.Ranking>
        <S.Profile source={Profile} />
        <S.Group>
          <S.Title>{name}</S.Title>
          {you ? (
            <S.Since color={you}>Você</S.Since>
          ) : (
            <S.Since color={you}>{since}</S.Since>
          )}
        </S.Group>
      </S.SectionProfile>
      <S.GraphCircle>
        <S.Value>{value}</S.Value>
      </S.GraphCircle>
    </S.Container>
  );
};

export default CardProfile;
