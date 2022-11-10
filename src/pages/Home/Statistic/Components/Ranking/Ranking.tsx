import React, { useState } from "react";
import { Switch } from "react-native";
import CardProfile from "./Components/CardProfile/CardProfile";
import Pagination from "./Components/Pagination/Pagination";
import * as S from "./Ranking.styles";

const Ranking: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [pagination, setPagination] = useState(1);

  return (
    <S.Container>
      <S.SectionTitle>
        <S.Title>Ficar oculto no ranking</S.Title>
        <Switch
          trackColor={{ false: "#767676", true: "#5EFF5A" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#09CBDA"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </S.SectionTitle>
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />
      <CardProfile value={100} name="Gabriel Sauer" you />
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />
      <CardProfile
        value={100}
        name="Gabriel Sauer"
        since="Membro desde Out/2021"
      />

      <S.SectionPagination>
        <Pagination
          current={pagination}
          total={15}
          next={() => setPagination(pagination + 1)}
          back={() => setPagination(pagination - 1)}
        />
      </S.SectionPagination>
    </S.Container>
  );
};

export default Ranking;
